// import the Model to communicate with the database 
const Car = require('../models/Car')

// Getting All The Cars
async function getAllCars(req,res) {
    const allCars = await Car.find()
    res.json(allCars)
}
