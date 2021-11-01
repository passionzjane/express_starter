const express = require('express')
const router = express.Router()
const {test, bio} = require('../controllers/testController')



router.get('/', test)
router.get('/test', bio)




module.exports = router