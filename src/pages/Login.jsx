import React from 'react'
import './login.css'

const Login = () => {
  return (
    <div className='auth'>
        <h1>Login</h1>
        <form>
          <input type="text" placeholder='Username' />
          <input type="password" placeholder='Password' />
          <button>Login</button>
          <a href="/register">Sign up</a>
        </form>
    </div>
  )
}

export default Login