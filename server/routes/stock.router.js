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

// main methods
function buyStock(req, res) {
  const symbol = req.body.symbol;
  const amount = req.body.amount;

  if (!symbol || !amount) {
    return res.status(400).send('invalid body');
  }

  User.findById(req.user.id, (err, user) => {
    if (err) {
      console.log(err);
      return res.status(400).send('User not found');
    } else {
      // check if user already has stock
      const index = _.findIndex(user.stocks, (stock) => stock.symbol === symbol);
      if (index !== -1) {
        const newAmount = user.stocks[index].amount + amount;
        user.stocks[index].amount = newAmount;
      } else {
        const newStock = new Stock({
          symbol: symbol,
          amount: amount,
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

// helper methods

module.exports = router;
