require('dotenv').config()
require('./config/database')
const Car = require('./models/Car')

Car.insertMany([
    {
        Photo:'',
        Brand: 'Lamborghini ',
        Year: '2015 ',
        Price: 'Price On Request',
        Description: 'Lamborghini Huracan | This is a smoke free Carfax certified 2015 Lamborghini Huracan LP610-4 coupe equipped with a 5.2L 610HP V10 engine and a 7-speed LDS dual-clutch with auto paddle shift transmission and AWD',
        Contact: '+973 34310225'
        

    },
    {
        Photo:'',
        Brand: 'Bugatti',
        Year: '2019',
        Price: '3,819,854$',
        Description: '2019 Bugati Chiron Sport Ultra rare sport | only 4k miles. We are an authorized dealer for Rimac part of the Bugatti Rimac',
        Contact: '+973 33860444'
    },
    {
        Photo:'',
        Brand: 'Ferrari',
        Year: '2020',
        Price:'381,469$',
        Description: 'Ferrari 812 Superfast | Grigio Scuro                  This is what happens when you add a “Historical Color” to superfast high-tech material: your heart beats like a 812 times a minute. Especially when it has the appearance and luxury of this specific Ferrari: our 812 Superfast includes Carbon Racing Seats with Tricolore striping, a Suspension Lifter, JBL sound system, full carbon interior spec and 800 hp non-turbo-power on the rear wheels. Let us show you what a brilliant supercar looks like and come visit Holland superfast please',
        Contact: '+973 37756671'
    },
    {
        Photo:'',
        Brand: 'Rolls-Royce',
        Year: '2019',
        Price:'647,967$',
        Description: 'Rolls-Royce Motor Cars Beverly Hills is pleased to present for sale this stunning 2019 Rolls-Royce Cullinan as part of our hand-selected pre-owned lineup. This gorgeous example is finished in the Black Diamond exterior paint and Creme Light interior / mileage 14K Mi / Engine: 12 Cylinder / Gearbox:Automatic /Fueltype:Petrol',
        Contact:'+973 66622691'
    },
    {
        Photo:'',
        Brand: 'Aston Martin',
        Year: '2021',
        Price:'148,809$',
        Description:'Aston Martin Vantage Roadster | Caribbean Blue Pearl Thanks to this insanely magnificent Aston Martin Vantage Roadster, you dont have to travel to the Bahamas to get the ultimate holiday feeling. Between the luxury yachts at the Côte dAzur, this bright blue AM Vantage will also make the difference,What a gem!',
        Contact:'+973 34310225'
    },
    {
        Photo:'',
        Brand:'Rivian',
        Year:'2022',
        Price:'99,595$',
        Description:'Rivian R1T Adventure Package AWD | Excellent condition with only 184 miles. 2022 Rivian R1T Adventure Edition. LA Silver with Black Mountain and Dark Ash wood interior. Large battery pack, 21 wheel and tire package, tow hooks, and quad -motor AWD. Please call to set up an appointment today! Errors and Omissions Disclaimer:Our dealership is not responsible for voided factory warranties. Dealer is not responsible for any option listed in the ad. Please verify the options at the time of purchase. ',
        Contact:'KAREEM PHONE NUMBER'
    },
 
])
.then(() => console.log('Data added successfully!'))
.catch(err => console.log(err))