import React from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import ListTask from '../Tasklist/ListTask';

const EmployeeDashboard = ({ data }) => {
  console.log("EMPLOYEE DASHBOARD DATA:", data);

  return (
    <div className='p-10 h-screen bg-[#1C1C1C]'>
        <Header data={data} />
        <TaskListNumbers data={data} />
        <ListTask />
    </div>
  )
}

export default EmployeeDashboard