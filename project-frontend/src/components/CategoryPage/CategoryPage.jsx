import React from 'react'
import './CategoryPage.css'
import { Link } from 'react-router-dom'

function CategoryPage(props) {
  return ( 
     <div> 
            <ul className= "Category">
            <li><Link to='/category/Bugatti' element>Bugatti</Link> </li>
            <li><Link to='/category/Ferrari'>Ferrari</Link> </li>
            <li><Link to='/category/Lamborghini'>Lamborghini</Link> </li>
            <li><Link to='/category/RollsRoyce'>Rolls Royce</Link> </li>
            <li><Link to='/category/AstonMartin'>Aston Martin</Link> </li>
            <li><Link to='/category/Rivian'>Rivian</Link> </li>
            <li><Link to='/category/McLaren'>McLaren</Link> </li>
            <li><Link to='/category/Corvette'>Corvette</Link> </li>
            McLaren
            </ul>
        
    </div> 
    
   )}
   
   
   
export default CategoryPage