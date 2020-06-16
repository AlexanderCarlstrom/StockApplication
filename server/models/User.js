const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _ = require('lodash');
const Stock = require('./Stock');
const bcrypt = require('bcrypt');

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

// return object without password and stocks
userSchema.methods.toJSON = () => {
  const user = this;
  const userObject = user.toObject();
  return _.omit(userObject, ['stocks', 'password']);
};

module.exports = User = mongoose.model('User', userSchema, 'users');
