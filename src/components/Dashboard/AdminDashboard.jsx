import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'
const AdminDashboard = ({ data, handleLogout }) => {
  return (
    <div className='h-screen w-full p-7 bg-[#1c1c1c] flex flex-col overflow-hidden'>

  <Header data={data} handleLogout={handleLogout} />

  <CreateTask />

  {/* FIX */}
  <div >
    <AllTask />
  </div>

</div>
  )
}
export default AdminDashboard
