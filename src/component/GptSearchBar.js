import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='pt-[5%] flex justify-center'>
      <form className='w-1/2 bg-black grid grid-cols-12'>
        <input type="text" className="p-4 m-4 col-span-9" placeholder="Enter your query" />
        <button type="submit" className='py-2 px-4 m-4 bg-white text-red-600 rounded-lg col-span-3'>Search</button>
      </form>
    </div>
  )
}

export default GptSearchBar;