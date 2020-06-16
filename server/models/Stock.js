const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stockSchema = new Schema({
  country: {
    String,
    required: true,
  },
  currency: {
    String,
    required: true,
  },
  name: {
    String,
    required: true,
  },
  amount: {
    Number,
    required: true,
  },
});

module.exports = Stock = mongoose.model('Stock', stockSchema);
