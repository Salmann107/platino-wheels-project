import React from 'react'
import './CategoryPage.css'
import { Link } from 'react-router-dom'

function CategoryPage(props) {
  return ( 
     <div> 
            <ul className= "Category">
            <li id = 'Bugatti'><Link to='/category/Bugatti' element>Bugatti</Link> </li>
            <li id = 'Ferrari'><Link to='/category/Ferrari'>Ferrari</Link> </li>
            <li id = 'Lambo'><Link to='/category/Lamborghini'>Lamborghini</Link> </li>
            <li id = 'RR'><Link to='/category/RollsRoyce'>Rolls Royce</Link> </li>
            <li id = 'AM'><Link to='/category/AstonMartin'>Aston Martin</Link> </li>
            <li id = 'rivian'><Link to='/category/Rivian'>Rivian</Link> </li>
            </ul>
        
    </div> 
    
   )}
   
   
   
export default CategoryPage