import React from 'react'

const CreateTask = () => {
  return (
   <div className='p-5 bg-[#1c1c1c] rounded-xl'>
      <form className='flex flex-wrap w-full items-start justify-between gap-10'>
        
        {/* Left Side: Inputs Group */}
        <div className='w-full md:w-1/2 flex flex-col gap-4'>
          
          <div>
            <label className='text-sm text-gray-300 mb-1 block font-medium'>Task Title</label>
            <input 
              type="text" 
              placeholder='Make a UI design' 
              className='text-sm py-2 px-4 w-full rounded outline-none bg-transparent border-[1px] border-gray-600 text-white placeholder:text-gray-500 focus:border-gray-400'
            />
          </div>

          <div>
            <label className='text-sm text-gray-300 mb-1 block font-medium'>Date</label>
            <input 
              type="date" 
              className='text-sm py-2 px-4 w-full rounded outline-none bg-transparent border-[1px] border-gray-600 text-white focus:border-gray-400 [color-scheme:dark]'
            />
          </div>

          <div>
            <label className='text-sm text-gray-300 mb-1 block font-medium'>Asign to</label>
            <input 
              type="text" 
              placeholder='employee name' 
              className='text-sm py-2 px-4 w-full rounded outline-none bg-transparent border-[1px] border-gray-600 text-white placeholder:text-gray-500 focus:border-gray-400'
            />
          </div>

          <div>
            <label className='text-sm text-gray-300 mb-1 block font-medium'>Category</label>
            <input 
              type="text" 
              placeholder='design, dev, etc' 
              className='text-sm py-2 px-4 w-full rounded outline-none bg-transparent border-[1px] border-gray-600 text-white placeholder:text-gray-500 focus:border-gray-400'
            />
          </div>

        </div>

        {/* Right Side: Description & Button */}
        <div className='w-full md:w-[45%] flex flex-col gap-4'>
          <div className='flex flex-col h-full'>
            <label className='text-sm text-gray-300 mb-1 block font-medium'>Description</label>
            <textarea 
              rows="10"
              className='w-full text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-600 text-white focus:border-gray-400 resize-none'
            ></textarea>
          </div>
          
          <button className='bg-emerald-500 hover:bg-emerald-600 transition-colors text-white font-semibold text-sm py-3 px-5 rounded-lg mt-2 w-full'>
            Create Task
          </button>
        </div>

      </form>
    </div>
  )
}

export default CreateTask