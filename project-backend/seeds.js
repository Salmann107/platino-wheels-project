require('dotenv').config()
require('./config/database')
const Car = require('./models/Tweet')

Car.insertMany([
    {
        Photo:'',
        Brand: 'Lamborghini ',
        Year: '2015 ',
        Price: 'Price On Request',
        Description: 'This is a smoke free Carfax certified 2015 Lamborghini Huracan LP610-4 coupe equipped with a 5.2L 610HP V10 engine and a 7-speed LDS dual-clutch with auto paddle shift transmission and AWD. This car is finished in a beautiful Bianco Icarus (Metallic White) exterior color and Bi-Color Nero Ade (Black) leather with Red Alcantara (fabric) along with Red contrast stitching throughout. website in the description',
        Contact: '+973 34310225'
        

    },
    {
        Photo:'',
        Brand: 'Bugati Chiron Sport ',
        Year: '2018',
        Price: '381,469$',
        Description: '2019 Bugati Chiron Sport - Ultra rare sport - only 4k miles. We are an authorized dealer for Rimac part of the Bugatti Rimac. Franchised new car dealerships: LOTUS OF NAPLES, KARMA OF NAPLES, ALFA ROMEO OF NAPLES, RIMAC OF NAPLES, SPYKER OF NAPLES - NAPLES MOTORSPORTS, INC.',
        Contact: '+973 33860444'
    },
    {
        Brand: 'Ferrari 812 Superfast rwd',
        Year: '2020',
        Price:'',
        Photo:'',
        Description: 'Ferrari 812 Superfast | Grigio Scuro                  This is what happens when you add a “Historical Color” to superfast high-tech material: your heart beats like a 812 times a minute. Especially when it has the appearance and luxury of this specific Ferrari: our 812 Superfast includes Carbon Racing Seats with Tricolore striping, a Suspension Lifter, JBL sound system, full carbon interior spec and 800 hp non-turbo-power on the rear wheels. Let us show you what a brilliant supercar looks like and come visit Holland superfast please'
       
    },
    {
        Photo:'',
        Brand: '',
        Year: '',
        Price:'',
        Description: '',
        Contact:''
    },
    {
        Photo:'',
        Brand: '',
        Year: '',
        Price:'',
        Description: '',
        Contact:''
    },
    {
        Photo:'',
        Brand: '',
        Year: '',
        Price:'',
        Description: '',
        Contact:''
    },
    {
        Photo:'',
        Brand: '',
        Year: '',
        Price:'',
        Description: '',
        Contact:''
    },
    {
        Photo:'',
        Brand: '',
        Year: '',
        Price:'',
        Description: '',
        Contact:''
    },
])
.then(() => console.log('Data added successfully!'))
.catch(err => console.log(err))