import React from 'react'
import './login.css'

const Register = () => {
  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password:"",
  })

  const handleChange = e =>{
    setInputs(prev=>({...prev,[e.target.name]: e.target.value}))
  }
  return (
    <div className='auth'>
        <h1>Register</h1>
        <form>
          <input required type="text" placeholder='username' name='username' onChange={handleChange} />
          <input required type="email" placeholder='email' name='email' onChange={handleChange}/>
          <input required type="password" placeholder='password' name='password' onChange={handleChange}/>
          <button>Register</button>
          <p>Error</p>
          <span>Already have an account? <a href="/login">Login</a></span>
        </form>
    </div>
  )
}

export default Register