const Products = require('../model/Product');
const fs = require("fs");
const path = require("path");


//Create (Criação), Read (Consulta), Update (Atualização) e Delete (Destruição)
module.exports = {
    async create(req, res){
        
        console.log('add a new Product');
        newProduct = await Products.create({
            name: req.body.name, 
            price: req.body.price,
            description: req.body.description,
            image: req.file.path,
        }
            );
        return res.json(newProduct);
    },
    async readAll(req, res){

        console.log('return all Products');
        Products.find({})
        .then(products => {
            res.statusCode = 200;
            res.json(products);
            res.end();
        })
        .catch(err => {
            res.statusCode = 404;
            console.error(err);
            res.end()
        });
    },
    async readOne(req, res){
        
        console.log("return a single product")
        Products.findById(req.params.productId)
        .then(product =>{
            if(!product){
                res.statusCode = 400;
                res.end("Invalid Id");
            }
            res.statusCode = 200;
            res.json(product);
        })
        .catch(err => {
            console.log("Invalid Id")
            res.end("Invalid Id");
        });
    },
    async update(req, res){

        console.log("update a product");
        Products.findByIdAndUpdate(req.params.productId,{
            $set: req.body,
        }, {new: true})
        .then(product =>{
            res.json(product);
        })
        .catch(err =>{
            console.error(err);
        })
    },
    async deleteOne(req, res){
        
        console.log("delete a product");
        Products.findByIdAndDelete(req.params.productId)
        .then(product => {
            res.statusCode = 200;
            res.json(product);
        })
        .catch(err =>{
            console.error(err);
        })
    },
    async deleteAll(req, res){

        console.log("delete all the products");
        Products.remove({}, (err) => {
            if(err) throw err;
            res.statusCode = 200;
            res.json("Success to delete all the collection");
        });
    },
}