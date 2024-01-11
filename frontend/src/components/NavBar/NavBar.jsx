import React, { useState } from 'react'
import './NavBar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
export const NavBar = () => {

  const[Menu,setMenu]=useState("shop")

  return (
    <div className='navbar'>
    <div className="nav-logo">
      <img src={logo} alt="Logo" />
      <p>SHOPPER</p>
    </div>
    <ul className="nav-menu">
      <li onClick={()=>{setMenu("shop")}}> <Link style={{textDecoration:"none"}}to='/'>Shop</Link>
      {Menu==="shop"?<hr/>:<></>} </li>
      <li onClick={()=>{setMenu("mens")}}> <Link style={{textDecoration:"none"}} to='/men'>Men</Link> 
      {Menu==="mens"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("womens")}}>  <Link style={{textDecoration:"none"}} to='/women'>Women</Link> 
      {Menu==="womens"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:"none"}} to='/kid'>Kids</Link> 
      {Menu==="kids"?<hr/>:<></>}</li>
    </ul>
    <div className="nav-login-cart">
      <Link to='/login'><button> Login</button></Link>
      <Link to='/cart'><img src={cart_icon} alt="Cart Icon" /></Link>

    <div className="nav-cart-count">
      0
    </div>
    </div>
    </div>
  )
}
