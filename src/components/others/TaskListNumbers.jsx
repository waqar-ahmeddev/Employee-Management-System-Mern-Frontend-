import React from 'react'

const TaskList = () => {
  return (
    <div className='flex mt-10 justify-between gap-5'>
        <div className='rounded-xl py-6 px-9 bg-red-400 w-[45%]'>
           <h2 className='font-semibold text-3xl'>
            0
           </h2>
           <h3 className='font-medium text-xl'>
              New Task
           </h3>
        </div>
        <div className='rounded-xl py-6 px-9 bg-blue-400 w-[45%]'>
           <h2 className='font-semibold text-3xl'>
            0
           </h2>
           <h3 className='font-medium text-xl'>
              New Task
           </h3>
        </div>
        <div className='rounded-xl py-6 px-9 bg-green-400 w-[45%]'>
           <h2 className='font-semibold text-3xl'>
            0
           </h2>
           <h3 className='font-medium text-xl'>
              New Task
           </h3>
        </div>
        <div className='rounded-xl py-6 px-9 bg-yellow-400 w-[45%]'>
           <h2 className='font-semibold text-3xl'>
            0
           </h2>
           <h3 className='font-medium text-xl'>
              New Task
           </h3>
        </div>
    </div>
  )
}

export default TaskList