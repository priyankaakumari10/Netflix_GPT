import React, { useRef, useState } from 'react'
import Header from './Header'
import checkValidData from '../utils/validate';
import { createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../utils/firebase";
// here either we can access each input using useState or we can use useRef

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg,setErrorMsg]=useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const handButtonClick = ()  => {
   
    // const emaill=email.current.value;
    // const passwaord=password.current.value;
    const msg= checkValidData(email.current.value,password.current.value)
    setErrorMsg(msg);
    if(msg){
      return;
    }
    // sign up /sign in logic
    if(!isSignInForm){
      
      createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        setErrorMsg("user already registered " ); 
      });
    }else{
      // sign in logic
      signInWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential) =>{
        // Signed in 
        const user = userCredential.user;
        console.log(user);
      })
      .catch(()=>{
        setErrorMsg("Invalid Email or Password");
      })

    }

  };
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <div className=" absolute">
        <Header />
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form onSubmit={(e)=>{e.preventDefault()}} className='w-3/12 absolute p-12 bg-black my-36  mx-auto right-0 left-0 text-white rounded-md bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input
          type='text'
          placeholder='Enter your Name'
          className='p-4 my-4 w-full bg-gray-700 rounded-md '
        />}
        <input
          ref={email}
          type='text'
          placeholder='Email Address'
          className='p-4 my-4 w-full bg-gray-700 rounded-md '
        />
        <input
          ref={password}
          type='text'
          placeholder='Password'
          className='p-4 my-4 w-full bg-gray-700 rounded-md'
        />
        <p className='text-red-500 font-bold text-lg py-2'>{errorMsg}</p>
        <button className='p-4 my-4 bg-red-700 w-full rounded-md' onClick={handButtonClick}>{isSignInForm ? "Sign In" : "Sign up"}</button>
        {isSignInForm ?
          <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>New to Netflix ?<span className='text-blue-500'>Sign Up Now</span></p>
          : <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>already Sign up<span className='text-blue-500'>Sign In Now</span></p>

        }
      </form>
    </div>
  )
}

export default Login;