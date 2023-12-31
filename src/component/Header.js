import React, { useEffect, useState } from 'react';
import { SUPPORTED_LANGUAGES, USER_AVATAR } from '../utils/constant';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate('/error');
      });
  };

  const user = useSelector((store) => store.user);
  const GptSearch = useSelector((store) => store.gptSearch);
  const userName = user?.displayName;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsDropdownOpen(true);
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });

    // Unsubscribe when the component unmounts
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

const handleLanguageChange=(e)=>{
  // Handle language change logic here
  dispatch(changeLanguage(e.target.value))
}

  const renderDropdown = () => {
    return (
      <select className="px-3" onChange={handleLanguageChange}>
       {SUPPORTED_LANGUAGES.map( lang=><option key={lang.identifier}value={lang.identifier}>{lang.name}</option>)} 
      </select>
    );
  };

  return (
    <div className="px-6 py-2 bg-gradient-to-b from-black z-20 w-full flex flex-col md:flex-row justify-between absolute">
      <img
        className="w-48 pt-4 h-16 mx-auto md:ml-0"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      <div>
        {user && (
          <div className="flex p-2 gap-3">
            {user && renderDropdown()}
            <button
              onClick={handleGptSearchClick}
              className="text-white mx-auto md:mx-9 bg-red-600 rounded-md md:mr-4 px-5 py-2 my-6 md:my-0 md:px-7"
            >
              {GptSearch ? 'Home' : 'GPT Search'}
            </button>
            <img alt="user icon" src={USER_AVATAR} className="w-12 h-12" />
            <button className="font-bold text-lg text-white" onClick={handleSignOut}>
              Sign out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
