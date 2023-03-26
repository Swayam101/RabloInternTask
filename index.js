const qs=require('querystring')

const express = require("express");
const bodyParser=require('body-parser')
const mongoose = require("mongoose");
const cors=require('cors')
require("dotenv").config();
const {StatusCodes}=require('http-status-codes')

const errorHandler=require('./middlewares/errorHandler.js')
const productRouter=require('./routes/products.js')

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: '*'
}))

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.use(productRouter)

app.use((req,res,next)=>res.status(StatusCodes.NOT_FOUND))

app.use(errorHandler)

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => console.log(`Server @${port}`));
  })
  .catch((err) => console.log(err));
