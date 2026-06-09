import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { setLocalStorage } from "./components/utilities/LocalStorage";
import { AuthContext } from "./components/Context/AuthProvider";
function App() {
    const [first, setfirst] = useState(null)
     const data = useContext(AuthContext)
    console.log(data.employees)
    const handleLoggin = (email,password)=> {
      if(email == 'admin@gmail.com' && password == '123')     
        {
        setfirst('admin');
      }else if (email == 'ali@gmail.com' && password == '123'){
        setfirst('employees')
      } else{
        alert('Invalid Emial or Password')
      }
     }
  
  return (
 <>
  {!first ? (<Login handleLoggin={handleLoggin} /> ) : first === 'admin' ? (<AdminDashboard />) : ( <EmployeeDashboard /> ) }
</>
  )
}

export default App;