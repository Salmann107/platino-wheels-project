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
        Brand: 'Lamborghini ',
        Year: '2021',
        Price: '3,500,000',
        Description: 'Lamborghini Sian | The indomitable V12 engine of the Sián Roadster incorporates titanium intake valves and is uprated to 785 CV (577 kW) at 8,500 rpm, thus becoming the most powerful Lamborghini engine ever made, delivering a total of 819 CV (602 kW) and reaching a top speed of over 350 km/h',
        Contact: '+973 35666878'
    },

    {
        Photo:'',
        Brand: 'Bugatti',
        Year: '2019',
        Price: '$ 3,819,854',
        Description: '2019 Bugati Chiron Sport Ultra rare sport  only 4k miles. We are an authorized dealer for Rimac part of the Bugatti Rimac',
        Contact: '+973 33860444'
    },
    {
        Photo:'',
        Brand: 'Bugatti',
        Year: '2021',
        Price: '$ 13,400,000',
        Description: ' Bugatti La Voiture Noire | the Bugatti La Voiture Noire specs are built upon a proven Bugatti chassis. Because this car is destined for a private collection, we might not see it run a quarter-mile. Given the performance of similar models, we will estimate the Bugatti La Voiture Noire 0-60 time of under 3 seconds, with a low-9 second 1/4 mile.',
        Contact: '+973 3386587',
    },

    {
        Photo:'',
        Brand: 'Ferrari',
        Year: '2020',
        Price:'$ 381,469',
        Description: 'Ferrari 812 Superfast | Grigio Scuro this is what happens when you add a “Historical Color” to superfast high-tech material: your heart beats like a 812 times a minute. Especially when it has the appearance and luxury of this specific Ferrari: our 812 Superfast includes Carbon Racing Seats with Tricolore striping, a Suspension Lifter, JBL sound system, full carbon interior spec and 800 hp non-turbo-power on the rear wheels. Let us show you what a brilliant supercar looks like and come visit Holland superfast please',
        Contact: '+973 37756671'
    },
    {
        Photo:'',
        Brand: 'Ferrari',
        Year: '2020',
        Price:'$ 599,252',
        Description: 'Emission Standard: Euro 6 Fuel Consumption (comb.): 12.0 l/100 km Fuel Consumption (in town): 16.9 l/100 km Fuel Consumption (out of town): 9.2 l/100 km CO₂ Emissions (comb.): 273.0 g/km CO₂ Efficiency Rating: G, For full details and descriptions, please donhet hsitate to contact our sales team at Hollmann International.',
        Contact: '+973 37756671'
    },

    {
        Photo:'',
        Brand: 'Rolls-Royce',
        Year: '2019',
        Price:'$ 647,967',
        Description: 'Rolls-Royce Motor Cars Beverly Hills is pleased to present for sale this stunning 2019 Rolls-Royce Cullinan as part of our hand-selected pre-owned lineup. This gorgeous example is finished in the Black Diamond exterior paint and Creme Light interior / mileage 14K Mi / Engine: 12 Cylinder / Gearbox:Automatic /Fueltype:Petrol',
        Contact:'+973 66622691'
    },
    {
        Photo:'',
        Brand: 'Rolls-Royce',
        Year: '2018',
        Price:'Price On Request',
        Description: '2018 Rolls-Royce Wraith | 2dr Black Badge with Starlight Headliner features a 6.6L 12 CYLINDER 12cyl Gasoline engine. It is equipped with a 8 Speed Automatic transmission. The vehicle is Diamond Black Metallic with a Cobalto Blue / Black Leather interior. - Climate Control, Dual Zone Climate Control, Cruise Control, Power Steering, Power Mirrors, Leather Steering Wheel, Rear Air Conditioning, Wood Trim, Clock, Tachometer, Telescoping Steering Wheel,',
        Contact:'+973 66688741'
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
        Brand: 'Aston Martin',
        Year: '2012',
        Price:'$355,917',
        Description:'2012 Aston Martin Vanquish | Inspired by the Aston Martin designs of the 1980s and 90s, the Vengeance is the culmination of Kahns lifelong pursuit to create the car he has always wanted to drive. His personality is evident in every curve of the coachbuilt body, the result of a painstaking design process, working and reworking each line and surface to the point of perfection.',

        Contact:'+973 34567489'
    },

    {
        Photo:'',
        Brand:'Rivian',
        Year:'2022',
        Price:'99,595$',
        Description:'Rivian R1T Adventure Package AWD | Excellent condition with only 184 miles. 2022 Rivian R1T Adventure Edition. LA Silver with Black Mountain and Dark Ash wood interior. Large battery pack, 21 wheel and tire package, tow hooks, and quad -motor AWD. Please call to set up an appointment today! Errors and Omissions Disclaimer:Our dealership is not responsible for voided factory warranties. Dealer is not responsible for any option listed in the ad. Please verify the options at the time of purchase. ',
        Contact:'KAREEM PHONE NUMBER'
    },
    {
        Photo:'',
        Brand:'Rivian',
        Year:'2022',
        Price:'$144,950',
        Description:'Rivian R1S Launch Edition | 2022 Rivian R1S Launch Edition the Most Eagerly Anticipated New SUV On The Market! * Beautiful Launch Green Paint Over Black Mountain and Dark Ash Wood Interior * Launch Edition Comes Nearly Fully Loaded With All The Desirable Options! *R1S Launch Edition Features* * Large Battery Pack * 316 Miles of Range * 20” All-Terrain Wheels and Tires * Special Interior Badging * Adventure Package * Premium Interior * Heated and Cooled Vegan Leather Seats * Air Compressor With Accessory Kit * Heated Steering Wheel * Natural Ash Grain Wood Interior * Rivian Elevation by Meridian Audio System * Removable Bluetooth Speaker *Additional Information* * Safety Guide Booklet * Original Window Sticker *Standard Features* * 128.9-kWh Battery Pack * 316 Mile Range * Quad Motors * 835hp/908 Lb-Ft of Torque  ',
        Contact:'KAREEM PHONE NUMBER'
    },

    {
        photo:'',
        Brand:'Chevorlete',
        Year:'2023',
        Price:'$116,000',
        Description:'Chevorlet Corvet C8 Z06 | 5.5L LT6 V8 Naturally aspirated, 0 to 100 KM/PH in 2.6 seconds 670 horse power',
        Contact:'For more details please contact Mohammad Salman',
    },
    {
        photo:'',
        Brand:'Chevorlete',
        Year:'2023',
        Price:'69,340',
        Description:'chevrolet hellcat | The 6.2-liter supercharged V-8 Hellcat is unlike any car in the world, with 717 horsepower and 656 pound-feet of torque and a speed of 199 mph, after a 0-60 mph time of 3.5 seconds. Things escalate quickly from there. Theres the Redeye, with 797 hp and 707 lb-ft, and a time of 3.4 seconds',
        Contact:'For more details please contact Mohammad Salman',
    },
 

])
.then(() => console.log('Data added successfully!'))
.catch(err => console.log(err))