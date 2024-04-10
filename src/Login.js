import React, {useState} from 'react'
import './Login.css'
import { Link, useNavigate  } from 'react-router-dom' //useHistory = useNavigate
import { auth } from './firebase'

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const signIn = e =>{
      e.preventDefault();

      //some firebase login
      auth 
        .signInWithEmailAndPassword(email, password)
        .then(auth =>{
          navigate.push('/')
        })
        .catch(error => alert(error.message))

  }

  const register = e =>{
      e.preventDefault();

      auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            //it successfully created new user & password
            if(auth){
              navigate.push('/')
            }
        })
        .catch(error => alert(error.message))
      //do some firebase register
  }

  return (
    <div className='login'>
      <Link to='/'>
        <img 
          className='login_logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
        />
      </Link>

      <div className='login_container'>
        <h1>Sign-in</h1>
      

      <form>
        <h5>Email</h5>
          <input type="text"  value={email} onChange=
          {e => setEmail(e.target.value)}
          />

        <h5>Password</h5>
        <input type="password" value={password} onChange=
          {e => setPassword(e.target.value)}
          />

        <button type='submit'   onClick={signIn}
        className='loginSignin_btn'>Sign In</button>
      </form>

      <p>
          By signing-in you agree to the SHOPOMANIA's Conditions of Use & Sale. Please
          our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
      </p>


      <button onClick={register}
      className='loginRegister_btn'>Create your Shopomania Account</button>
    </div>
  </div>
  )
}

export default Login
