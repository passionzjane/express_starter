const express = require('express')


const app = express()



const port = 5000

const server = app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});