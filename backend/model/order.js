const mongoose = require('mongoose');

const { Schema } = mongoose;

const Order = new Schema({
   
    Products: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Product', 
        require:true,
    }],
        
    Qtd: {
        type: [Number],
        require: true,
    },

    Total: {
        type: Number,
        require: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,       
    },

    CashPayment: {
        type: Boolean,
        require: true
    },

    Boleto: String,

    Owner: {
        type: String,
        require: true
    },

    NumberCreditCard: String,

    typeCard: String,
    
    Cvv: String,
    
    QtdParcelas: Number,

    PrecoParcela: Number,
    
    cpf: String,
    
    validade: String
});

module.exports = mongoose.model('Order', Order);

