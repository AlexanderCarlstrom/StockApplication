const expressJwt = require('express-jwt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const _ = require('lodash');
const { trim } = require('lodash');
require('dotenv').config();

// routes
router.post('/register', (req, res) => {
  register(req, res);
});

router.post('/login', (req, res) => {
  login(req, res);
});

router.get('/login-with-id', expressJwt({ secret: process.env.SECRET }), (req, res) => {
  loginWithId(req, res);
});

// main methods
async function register(req, res) {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const idNumber = req.body.identityNumber;
  const address = req.body.address;
  const zip = req.body.zip;
  const city = req.body.city;
  const email = req.body.email;
  const password = req.body.password;

  // check that all values exist
  if (!firstname || !lastname || !idNumber || !address || !zip || !city || !email || !password) {
    return res.status(400).send('invalid body');
  }

  // check if email already exist in db
  User.findOne({ email: email }).then((user) => {
    if (user) {
      return res.status(401).send('Email already exist');
    } else {
      // if email doesn't exist in db then hash password and save new user to db
      const hash = bcrypt.hashSync(password, 10);
      const user = new User({
        firstname: firstname,
        lastname: lastname,
        identityNumber: idNumber,
        address: address,
        zipCode: zip,
        city: city,
        email: email,
        password: hash,
      });

      user
        .save()
        .then((user) => res.json(user))
        .catch((err) => console.log(err));
    }
  });
}

function login(req, res) {
  const email = req.body.email;
  const password = req.body.password;

  // check that all values exist
  if (!email || !password) {
    return res.status(400).send('invalid body');
  }

  // try to find user by email
  User.findOne({ email: email }).then((user) => {
    if (!user) {
      return res.status(401).send('Email not found');
    } else {
      // compare password from user input and password hash in db
      bcrypt.compare(password, user.password).then((result) => {
        if (!result) {
          return res.status(401).send('Invalid password');
        } else {
          // if email exist in db create a jwt with user id and return to user
          jwt.sign(
            {
              exp: Math.floor(Date.now() / 1000) + 60 * 60,
              id: user._id,
            },
            process.env.SECRET,
            (err, token) => {
              if (err) {
                console.log(err);
              } else {
                res.send({
                  token: token,
                  user: trimUser(user),
                });
              }
            }
          );
        }
      });
    }
  });
}

function loginWithId(req, res) {
  User.findById(req.user.id, (err, user) => {
    if (err) {
      return res.sendStatus(400);
    } else if (!user) {
      return res.status(401).send('user not found');
    } else {
      res.send(trimUser(user));
    }
  });
}

// helper methods
function trimUser(user) {
  return _.pick(user, ['stocks', 'firstname', 'lastname', 'identityNumber', 'address', 'zipCode', 'city', 'email']);
}

module.exports = router;
