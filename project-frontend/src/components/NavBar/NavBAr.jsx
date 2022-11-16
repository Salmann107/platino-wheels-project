import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

function NavBar(props) {
  return (
    <> 
    {props.isAuth ? (
        <div className='HA'>
          <ul className="navbar-ul">
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/category'>Category</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/policy'>Policy</Link></li>

          <li><Link to="/logout" onClick={props.onLogoutHandler}>Logout</Link></li>
          {props.user ? "Welcome " + props.user.user.username : null}
          </ul>
        </div>
     ) : (
       <div className='HA2'>
      <ul className="navbar-ul">
        <li><Link to='/home'>Home</Link></li>
      <li><Link to="/signup">Signup</Link></li>
      <li><Link to="/signin">Signin</Link></li>
      </ul>
    </div>
     )}

    </>
  )
}

export default NavBar
