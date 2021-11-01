const mongoose = require('mongoose');


const connectDb = async () => {

    const DB = process.env.DATABASE_URL

        const connect = await mongoose.connect(DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log(`DB CONNECTED: @ ${connect.connection.host}`)
    }





module.exports = connectDb