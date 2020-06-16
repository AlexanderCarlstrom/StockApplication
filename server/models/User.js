const mongoose = require('mongoose');
const Schema = mongoose.Schema;
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
    default: [],
  },
});
