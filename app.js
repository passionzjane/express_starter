const express = require('express')
const path = require('path')
const dotenv = require('dotenv')

const app = express()


//Configure .dotenv
dotenv.config({path: './config.env'});


//Serving static files
app.use(express.static(path.join(__dirname, 'public')));


// app.get('/', (req, res ) => {
//     res.send('Running')
// })



const port = process.env.PORT || 3001

const server = app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});

