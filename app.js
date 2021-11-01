const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const morgan = require('morgan')



const AppError = require('./utils/AppError')
const globalErrorHandler = require('./utils/errorHandler')


//Routers
const testRoute = require('./routes/testRoute')

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


//Mount Routers
app.use('/', testRoute)




//Handle 404 routes
app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server`, 404))
});


app.use(globalErrorHandler)

module.exports = app;