const {Router} = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
var storage = require('./imageRouter');

const uploadImg = multer({storage: storage});


productRouter = Router();
productRouter.use(bodyParser.json());

const ProductController = require('../controllers/ProductController');


productRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get(ProductController.readAll)
.post(uploadImg.single('image'), ProductController.create)
.put((req, res, next) => {
    res.statusCode = 403;
    res.end(`PUT operation not supported on ${req.baseUrl}${req.url}`);
})
.delete(ProductController.deleteAll);

productRouter.route('/:productId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get(ProductController.readOne)
.post((req, res, next) => {
    res.end(`POST operation not supported on ${req.baseUrl}${req.url}`);
})
.put(ProductController.update)
.delete(ProductController.deleteOne);

module.exports = productRouter;