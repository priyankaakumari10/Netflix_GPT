import React, { useRef } from 'react'
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';
import openai from '../utils/openai';


const GptSearchBar = () => {
  const langKey = useSelector(store =>store.config.lang) 
  const searchText =useRef(null);
  
  const handleGptSearchClick = async(e) => {
  e.preventDefault();
  console.log(searchText.current.value)
  //make api call to get movie result
 const gptQuery = "Act as a Movie Recommendations system and suggest 5 movies based on the following search query: " + searchText.current.value;
  const gptResults = await openai.chat.completions.create({
    messages: [{ role: "user", content:gptQuery }],
    model: "gpt-3.5-turbo",
  });
  console.log(gptResults.choices);
};


  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault}>
        <input
        ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          type="submit"
          className='py-2 px-4 m-4 bg-white text-red-600 rounded-lg col-span-3 font-medium'
          onClick={handleGptSearchClick}
          >
          {lang[langKey].search}

        </button>
        
      </form>
    </div>
  )
}

export default GptSearchBar;