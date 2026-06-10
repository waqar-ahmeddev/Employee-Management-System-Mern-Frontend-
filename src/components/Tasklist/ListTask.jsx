import React from "react";

const Tasklist = ({ data }) => {
  const tasks = data?.tasks || [];

  console.log("DATA RECEIVED:", data);

  if (!tasks.length) {
    return <div className="text-white p-5">No tasks found</div>;
  }

  return (
    <div
      id="tasklist"
      className="h-[400px] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap"
    >
      {tasks.map((task, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-[300px] p-5 bg-purple-400 rounded-xl mt-10"
        >
          <div className="flex justify-between items-center">
            <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
              {task.taskCategory}
            </h3>

            <h4 className="text-sm">{task.taskDate}</h4>
          </div>

          <h2 className="mt-5 text-2xl font-semibold">
            {task.taskTitle}
          </h2>

          <p className="text-sm mt-2">
            {task.taskDescription}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Tasklist;