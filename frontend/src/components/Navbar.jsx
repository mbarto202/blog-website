import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">Barto Blogs</div>
      <div className="links">
        <Link className='link' to="/?cat=link">
          <h4>Programming</h4>
        </Link>
        <Link className='link' to="/?cat=link">
          <h4>Bodybuilding</h4>
        </Link>
        <span>User</span>
        <span>Logout</span>
        <a className='writebtn'>
          <Link className= 'link' to="/write">Write</Link>
        </a>
      </div>
    </div>
  )
}

export default Navbar