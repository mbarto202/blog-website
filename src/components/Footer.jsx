import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer'>
      <a href="#" className='footerLogo'>Barto Blog</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footerSocials">
        <a href="https://linkedin.com"><BsLinkedin/></a>
        <a href="https://facebook.com"><FaFacebookF/></a>
      </div>

      <div className="footerCopyright">
        <small>&copy; Michael Barto. All rights reserved.</small>
      </div>
    </div>
  )
}

export default Footer