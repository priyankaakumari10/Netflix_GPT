import React, { useRef, useState } from 'react';
import Header from './Header';
import checkValidData from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { BG_URL } from '../utils/constant';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handButtonClick = (e) => {
    const msg = checkValidData(email.current.value, password.current.value);

    setErrorMsg(msg);
    if (msg) {
      return;
    }
    // SignUp Logic
    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: '',
          }).then(() => {
            const { uid, email, displayName } = auth.currentUser;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
          });
        })
        .catch(() => {
          setErrorMsg('User already registered ');
        });
    } else {
      // SignIn Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch(() => {
          setErrorMsg('Invalid Email or Password');
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />

      <div className=" ">
        <img
         src={BG_URL}
          alt="logo"
          className="absolute bg-slate-500 h-screen object-cover w-full"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 absolute p-6 bg-black my-36 mx-auto right-0 left-0 text-white rounded-md bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Enter your Name"
            className="p-4 my-4 w-full bg-gray-700 rounded-md"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-md"
        />
        <input
          ref={password}
          type="text"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-md"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMsg}</p>
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-md"
          onClick={handButtonClick}
        >
          {isSignInForm ? 'Sign In' : 'Sign up'}
        </button>
        <p className="py-2 text-sm cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? (
            <div>
              New to Netflix?{' '}
              <span className="text-red-600 font-semibold"> Sign Up Now!</span>
            </div>
          ) : (
            <div>
              Already an User?{' '}
              <span className="text-red-600 font-semibold"> Sign In Now!</span>
            </div>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
