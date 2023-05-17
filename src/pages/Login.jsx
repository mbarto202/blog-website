import React from 'react'
import './login.css'

const Login = () => {
  return (
    <div className='auth'>
        <h1>Login</h1>
        <form>
          <input required type="text" placeholder='Username' />
          <input required type="password" placeholder='Password' />
          <button>Login</button>
          <a href="/register">Sign up</a>
          <p>Error</p>
        </form>
    </div>
  )
}

export default Login