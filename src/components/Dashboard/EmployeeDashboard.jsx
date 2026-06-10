import React from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import ListTask from '../Tasklist/ListTask';

const EmployeeDashboard = ({ data, handleLogout }) => {
  return (
    <div className="p-10 h-screen bg-[#1C1C1C]">
      <Header data={data} handleLogout={handleLogout} />
      <TaskListNumbers data={data} />
      <ListTask data={data} />
    </div>
  );
};

export default EmployeeDashboard