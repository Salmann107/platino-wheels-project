const express = require('express')
const router = express.Router()
const carsController = require('../controllers/cars')

const isLoggedIn = require("../helper/isLoggedIn");

router.get('/cars', carsController.getAllCars)

router.get('/cars/:_id', carsController.getCar)

router.post('/cars', isLoggedIn, carsController.createCar)

router.delete('/cars/:_id', carsController.deleteCar)

module.exports = router
