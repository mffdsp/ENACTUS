const { modelNames } = require("mongoose");

const {Schema, model} = require('mongoose');

// nome, preço, descrição e
//imagem de cada um, criando 
const ProductSchema = new Schema({  
    name: {
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    }
    }, {
    timestamps: true,
    });

module.exports = model('Product', ProductSchema);


