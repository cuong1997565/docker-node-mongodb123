const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin' , '*');
      res.header('Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization');
      if (req.header === 'OPTIONS') {
          res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
          return res.status(200).json({});
      }

      next();
});

const productRoutes = require('./api/routes/products');

const orderRoutes = require('./api/routes/order');


app.use('/products', productRoutes);

app.use('/orders', orderRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status(404);
    next(error);
});


app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message : error.message
        }
    });
});

const ToDo = require('./toDoModel.js').ToDo;
const Product = require('./api/models/products.js').Product;
const DB_URI = 'mongodb://mongo:27017/toDoApp';

mongoose.connect(DB_URI).then(() => {
//   console.log('Listening on port 1111111111111111: ' + 7000);
//   app.listen(PORT);
});





module.exports = app;
