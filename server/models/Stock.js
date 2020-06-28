const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stockSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  industry: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
});

stockSchema.set('timestamps', true);

module.exports = Stock = mongoose.model('Stock', stockSchema);
