require('dotenv').config()
require('./config/database')
const Car = require('./models/Tweet')

Car.insertMany([
    {
        brand: '',
        year: '',
        photo:'',
        description: '',
    },
    {
        brand: '',
        year: '',
        photo:'',
        description: '',
    },
    {
        brand: '',
        year: '',
        photo:'',
        description: '',
    },
    {
        brand: '',
        year: '',
        photo:'',
        description: '',
    },
    {
        brand: '',
        year: '',
        photo:'',
        description: '',
    },
    {
        brand: '',
        year: '',
        photo:'',
        description: '',
    },
    {
        brand: '',
        year: '',
        photo:'',
        description: '',
    },
    {
        brand: '',
        year: '',
        photo:'',
        description: '',
    },
])
.then(() => console.log('Data added successfully!'))
.catch(err => console.log(err))