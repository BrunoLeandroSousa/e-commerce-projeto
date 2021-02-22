const express = require('express');
const routes  = express.Router();
const mongoose = require('mongoose');
const Product = require('./controller/product');
const Order = require('./controller/order');

mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);


routes.get('/', (req,res)=>{
    
    console.log("teste");
    res.send({
      'video': "game" 
    });
})
//Products
routes.post('/createproduct', Product.createProduct);
routes.get('/listproduct', Product.ListProduct);
routes.delete('/deleteprodutc/:id', Product.DeleteProduct);
routes.get('/showproduct/:id', Product.ShowProduct);

//Orders
routes.post('/createorder', Order.CreateOrder);
routes.get('/listorder', Order.ListOrder);
routes.put("/updateorder/:id", Order.UpdateOrder);
routes.delete("/deleteorder/:id", Order.DeleteOrder);

module.exports = routes;
