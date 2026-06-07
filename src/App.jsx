import React, { useState } from "react";

function App() {
  const [first, setfirst] = useState('')
  const [second, setsecond] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
      console.log(first);
       console.log(second);
    setfirst('');
    setsecond('');  
  }
  return (
    <div className="flex w-screen h-screen items-center justify-center bg-black">
      <div className="border-2 border-emerald-600 rounded-xl p-20"> 
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className="flex flex-col items-center justify-center">
         <input required
         value={first}
           onChange={(e)=>{
              setfirst(e.target.value);
           }}
         className="outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400 text-white " placeholder="Enter your Email" type="email" />
          <input   required
          value={second}
            onChange={(e)=>{
              setsecond(e.target.value);
            }}
            className="outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400 mt-5 text-white" placeholder="Enter your Password" type="password" />
          <button className="bg-emerald-600 text-white py-3 px-5 rounded-full hover:bg-emerald-700 cursor-pointer mt-5">Login</button>
        </form>
      </div>
    </div>
  );
}

export default App;