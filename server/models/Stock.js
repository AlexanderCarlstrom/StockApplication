const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stockSchema = new Schema({
  symbol: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

stockSchema.set('timestamps', true);

module.exports = Stock = mongoose.model('Stock', stockSchema);
