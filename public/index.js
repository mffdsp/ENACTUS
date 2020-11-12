const express = require('express'), http = require('http');
const morgan = require('morgan');  
const mongoose = require('mongoose');

const productRouter = require('./routes/productRouter');

const hostname = 'localhost', port = process.env.PORT || 3333;
const app = express();

app.use(morgan('dev'));
app.use('/products/', productRouter);
app.use(express.json)
  
const uri = "mongodb+srv://mffdsp:felismino@cluster0.c3uku.mongodb.net/ClusterMateus?retryWrites=true&w=majority";
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true } );

const server = http.createServer(app);


server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});