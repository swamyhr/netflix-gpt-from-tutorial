import React, {useState} from 'react'
import Header from './Header'
import backgroundImg from "../assets/imgs/background.jpg"
import { Link } from 'react-router-dom';

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }

  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src={backgroundImg} alt="background_img"/>
        </div>

        <form className='text-white absolute my-40 mx-auto right-0 left-0 p-12 bg-black w-3/12 bg-opacity-85'>
            <h1 className='font-bold text-3xl py-4'>{ isSignInForm ? "Sign in" : "Sign up"}</h1>
            {!isSignInForm ? 
            <input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 rounded-md'/> : null}
            <input type="email" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700 rounded-md'/>
            <input type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700 rounded-md'/>

            <button className='p-4 my-6 bg-red-700 w-full rounded-md'>{ isSignInForm ? "Sign In" : "Sign Up"}</button>
        {isSignInForm ? <p>New to netflix? <span onClick={toggleSignInForm} className='underline text-white cursor-pointer'> Sign up </span> here</p> :
        <p>Already a member? <span onClick={toggleSignInForm} className='underline text-white cursor-pointer'> Sign In </span> here</p> }
        </form>

    </div>
  )
}

export default Login