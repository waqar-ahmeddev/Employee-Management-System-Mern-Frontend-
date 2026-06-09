import React from 'react'

const Header = ({ data }) => {

  console.log("HEADER DATA:", data);

  return (
    <div className='flex items-end justify-between'>
      
      <h1 className='text-2xl font-medium text-white'>
        Hello 
        <span className='block font-semibold text-3xl'>
          {data?.name || "User"} 👏
        </span>
      </h1>

      <button className='bg-red-600 px-5 py-2 rounded text-white text-lg font-medium'>
        Logout
      </button>

    </div>
  )
}

export default Header