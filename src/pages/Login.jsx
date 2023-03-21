import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { auth } from '../firebase'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const Login = () => {
  const [err, setErr] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value

    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/')
    } catch (error) {
      setErr(true)
    }
  }
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <div className='logo'>KRISHIL CHAT</div>
        <div className='title'>Register</div>
        <form onSubmit={handleSubmit}>
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='password' />
          <button>Sign in</button>
        </form>
        <p>
          You don't have an account? <Link to='/register'>Register</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
