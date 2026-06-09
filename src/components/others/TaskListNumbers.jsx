import React from "react";

const TaskListNumbers = ({ data }) => {
  const tasks = data?.tasks || data?.data?.tasks || [];

  const newTaskCount = tasks.filter((task) => task.newTask).length;
  const activeTaskCount = tasks.filter((task) => task.active).length;
  const completedTaskCount = tasks.filter((task) => task.completed).length;
  const failedTaskCount = tasks.filter((task) => task.failed).length;

  return (
    <div className="flex mt-10 justify-between gap-5">
      
      <div className="rounded-xl py-6 px-9 bg-red-400 w-[45%]">
        <h2 className="font-semibold text-3xl">{newTaskCount}</h2>
        <h3 className="font-medium text-xl">New Task</h3>
      </div>

      <div className="rounded-xl py-6 px-9 bg-blue-400 w-[45%]">
        <h2 className="font-semibold text-3xl">{activeTaskCount}</h2>
        <h3 className="font-medium text-xl">Active Task</h3>
      </div>

      <div className="rounded-xl py-6 px-9 bg-green-400 w-[45%]">
        <h2 className="font-semibold text-3xl">{completedTaskCount}</h2>
        <h3 className="font-medium text-xl">Completed Task</h3>
      </div>

      <div className="rounded-xl py-6 px-9 bg-yellow-400 w-[45%]">
        <h2 className="font-semibold text-3xl">{failedTaskCount}</h2>
        <h3 className="font-medium text-xl">Failed Task</h3>
      </div>

    </div>
  );
};

export default TaskListNumbers;