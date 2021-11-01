const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const morgan = require('morgan')

const app = express()


//Configure .dotenv
dotenv.config({path: './config.env'});


//Serving static files
app.use(express.static(path.join(__dirname, 'public')));


if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}


//Body Parser, reading data from the body into req.body
app.use(express.json({limit: '100kb'}));




// app.get('/', (req, res ) => {
//     res.send('Running')
// })






module.exports = app;