const catchAsync = require('express-async-handler')

const test = catchAsync(async (req, res, next) => {

    res.status(200).json({
        status: true
    })
})


const bio = catchAsync(async (req, res, next) => {
  
    const myData = {
        name: "AUTOMATON ANGLE",
        alias: "ATM"
    }

        res.status(200).json({
            status: true,
            data: myData
        })
})


module.exports = {
    test,
    bio
}