import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">Barto Blog</div>
      <div className="links">
        <Link className='link' to="/?cat=link">
          <h4>link</h4>
        </Link>
        <Link className='link' to="/?cat=link">
          <h4>link</h4>
        </Link>
        <Link className='link' to="/?cat=link">
          <h4>link</h4>
        </Link>
        <Link className='link' to="/?cat=link">
          <h4>link</h4>
        </Link>
        <span>User</span>
        <span>Logout</span>
        <span className='write'>
          <Link className= 'link' to="/write">Write</Link>
        </span>
      </div>
    </div>
  )
}

export default Navbar