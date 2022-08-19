// basic lib import 
const express = require('express');
const router = require('./src/routes/api');
const app = new express();
const bodyparser = require('body-parser');  

// Security Middleware lib import 
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');

// Database lib import 
const mongoose = require('mongoose');

// Security Middleware Implement
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())

// Body-parser implement
app.use(bodyparser.json())

// rate limit
const limiter = rateLimit({
    windowMs: 15*60*1000,
    Max:3000
})

// app.use(limiter)

// Mongod DB Connection 
let URI = 'mongodb://localhost:27017/Todo'
let option = {
    user:'',
    pass:'',
    autoIndex:true
}
mongoose.connect(URI, option,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Database Connected")
    }
})

// Routing Implement
app.use('/api',router)

// Unidefined Routing implement

app.use('*',( req, res )=>{
    res.status(404).json({status:'Fail',data:'Not Found'})
})

module.exports = app;