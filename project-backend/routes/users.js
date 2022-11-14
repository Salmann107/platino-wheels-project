const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users')


router.post('/users', usersController.createUser)

router.get('/users', usersController.getAllUsers)


//still i havent finish the routes

module.exports = router