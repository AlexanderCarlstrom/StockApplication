const expressJwt = require('express-jwt');
const User = require('../models/User');
const Stock = require('../models/Stock');
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const _ = require('lodash');
require('dotenv').config();

// routes
router.post('/buy', expressJwt({ secret: process.env.SECRET }), (req, res) => {
  buyStock(req, res);
});

router.post('/sell', expressJwt({ secret: process.env.SECRET }), (req, res) => {
  sellStock(req, res);
});

// main methods
function buyStock(req, res) {
  const name = req.body.name;
  const amount = req.body.amount;
  const price = req.body.price;
  const industry = req.body.industry;
  const currency = req.body.currency;

  if (!name || !amount || !price || !industry || !currency) {
    return res.send({success: false, message: 'invalid body' })
  }

  // find user with id from jwt token
  User.findById(req.user.id, (err, user) => {
    if (err) {
      console.log(err);
      return res.send({success: false, message: err });
    } else if (!user) {
      return res.send({success: false, message: 'user not found' })
    } else {
      // check if user already has stock
      const index = _.findIndex(user.stocks, (stock) => stock.name === name);
      // if index is not -1 then user already have stock, otherwise create new stock and add it to user
      if (index !== -1) {
        const newAmount = user.stocks[index].amount + amount;
        user.stocks[index].amount = newAmount;
      } else {
        const newStock = new Stock({
          name: name,
          amount: amount,
          price: price,
          industry: industry,
          currency: currency,
        });
        user.stocks.push(newStock);
      }
      user.markModified('stocks');
      user
        .save()
        .then(() => res.send(user))
        .catch((e) => console.log(e));
    }
  });
}

function sellStock(req, res) {
  const symbol = req.body.symbol;
  const amount = req.body.amount;

  if (!symbol || !amount) {
    return res.status(400).send('invalid body');
  }

  // find user with id from jwt token
  User.findById(req.user.id, (err, user) => {
    if (err) {
      console.log(err);
      return res.sendStatus(400);
    } else if (!user) {
      return res.status(401).send('user not found');
    } else {
      // check if user already has stock
      const index = _.findIndex(user.stocks, (stock) => stock.symbol === symbol);
      // if index is not -1 then decrease amount by inputed number
      if (index !== -1) {
        const newAmount = user.stocks[index].amount - amount;
        // if user tries to sell more stocks than they have, return error
        if (newAmount < 0) {
          return res.status(400).send('cannot sell more stocks than available');
        }

        // if new amount is 0 then remove stock from user
        if (newAmount === 0) {
          user.stocks.splice(index, 1);
        } else {
          user.stocks[index].amount = newAmount;
        }
        user.markModified('stocks');
        user
          .save()
          .then(() => res.send(user))
          .catch((e) => console.log(e));
      }
    }
  });
}

module.exports = router;
