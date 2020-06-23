const mongoose = require('mongoose');
const Stock = require('./Stock');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const _ = require('lodash');

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  identityNumber: {
    type: String,
    required: true,
    maxlength: 12,
    minlength: 12,
  },
  address: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
    maxlength: 5,
    minlength: 5,
  },
  city: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  stocks: {
    type: [Stock.Stock],
  },
});

module.exports = User = mongoose.model('User', userSchema, 'users');
