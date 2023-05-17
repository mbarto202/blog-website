import React from 'react'
import './login.css'

const Register = () => {
  return (
    <div className='auth'>
        <h1>Register</h1>
        <form>
          <input required type="text" placeholder='Username' />
          <input required type="email" placeholder='Email' />
          <input required type="password" placeholder='Password' />
          <button>Register</button>
          <span>Already have an account? <a href="/login">Login</a></span>
          <p>Error</p>
        </form>
    </div>
  )
}

export default Register