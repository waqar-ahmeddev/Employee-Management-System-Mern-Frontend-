import React from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import ListTask from '../Tasklist/ListTask';
const EmployeeDashboard = () => {
  return (
    <div className='p-10 h-screen bg-[#1C1C1C]'>
        <Header />
        <TaskListNumbers />
        <ListTask />
    </div>
  )
}

export default EmployeeDashboard