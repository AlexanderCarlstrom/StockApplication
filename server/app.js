const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();
const app = express();

// import routes
const userRoutes = require('./routes/user.routes');
const stockRoutes = require('./routes/stock.router');

// connect to DB
mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to DB!');
  }
});

// setup middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// allow CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, access-token, refresh-token, Authorization'
  );
  next();
});

// define routes
app.use('/user', userRoutes);
app.use('/stock', stockRoutes);

const port = 4000;
app.listen(port, () => console.log('listening to port ' + port));
