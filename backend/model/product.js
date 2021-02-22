const mongoose = require('mongoose');

const { Schema } = mongoose;

const Product = new Schema({
    
    Name: {
       type: String,
       require: true
    },

    Typedrink: {
       type: String,
       require: true
    },

    Category: {
       type: String,
    },

    Price: {
       type: Number,
       require: true
    },

    Pathimg: {
       type: String,
       require: true 
    },
    
    Infos: {
       type: String,
       require: true
    },
    
    Amount: {
       type: Number,
       require: true
    },

});

module.exports = mongoose.model('Product', Product)