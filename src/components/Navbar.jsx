import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">Barto Blog</div>
      <div className="links">
        <Link className='link'>Links</Link>
      </div>
    </div>
  )
}

export default Navbar