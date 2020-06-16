const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _ = require('lodash');
import Stock from './Stock';

const userSchema = new Schema({
  name: {
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
  },
  stocks: {
    type: [Stock],
    required: true,
  },
});

// return object without password and stocks
userSchema.methods.toJSON = () => {
  const userObject = this.toObject();
  return _.omit(userObject, ['password', 'stocks']);
};

module.exports = User = mongoose.model('User', userSchema, 'users');
