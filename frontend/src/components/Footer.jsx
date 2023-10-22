import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer'>
      <a href="#" className='footerLogo'>Barto Blog</a>

      <ul className='permalinks'>
        <li><a href='#' className='ftlinks'>Home</a></li>
        <li><a href='#about' className='ftlinks'>About</a></li>
        <li><a href='#portfolio' className='ftlinks'>Portfolio</a></li>
        <li><a href='#contact' className='ftlinks'>Contact</a></li>
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