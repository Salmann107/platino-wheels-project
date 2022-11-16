import React from 'react'
import './CategoryPage.css'
import { Link } from 'react-router-dom'

function CategoryPage(props) {
  return ( 
     <div> 
            <ul className= "Category">
<<<<<<< HEAD
            <li id = 'Bugatti'><Link to='/category/Bugatti' element>Bugatti</Link> </li>
            <li id = 'Ferrari'><Link to='/category/Ferrari'>Ferrari</Link> </li>
            <li id = 'Lambo'><Link to='/category/Lamborghini'>Lamborghini</Link> </li>
            <li id = 'RR'><Link to='/category/RollsRoyce'>Rolls Royce</Link> </li>
            <li id = 'AM'><Link to='/category/AstonMartin'>Aston Martin</Link> </li>
            <li id = 'rivian'><Link to='/category/Rivian'>Rivian</Link> </li>
=======
            <li><Link to='/category/Bugatti' element>Bugatti</Link> </li>
            <li><Link to='/category/Ferrari'>Ferrari</Link> </li>
            <li><Link to='/category/Lamborghini'>Lamborghini</Link> </li>
            <li><Link to='/category/RollsRoyce'>Rolls Royce</Link> </li>
            <li><Link to='/category/AstonMartin'>Aston Martin</Link> </li>
            <li><Link to='/category/Rivian'>Rivian</Link> </li>
            <li><Link to='/category/McLaren'>McLaren</Link> </li>
            <li><Link to='/category/Corvette'>Corvette</Link> </li>
            McLaren
>>>>>>> 5799faf2241b5da637012275cf757590a7b809ae
            </ul>
        
    </div> 
    
   )}
   
   
   
export default CategoryPage