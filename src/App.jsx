import React, { useContext, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./components/Context/AuthProvider";

function App() {
  const [first, setfirst] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const data = useContext(AuthContext);

  const handleLoggin = (email, password) => {
    if (email === "admin@gmail.com" && password === "123") {
      setfirst("admin");
    } else {
      const employee = data?.employees?.find(
        (e) => e.email === email && e.password === password
      );

      if (employee) {
        setfirst("employees");
        setLoggedInUser(employee);
      } else {
        alert("Invalid Email or Password");
      }
    }
  };

  const handleLogout = () => {
    setfirst(null);
    setLoggedInUser(null);
  };

  return (
    <>
      {!first && <Login handleLoggin={handleLoggin} />}

      {first === "admin" && (
        <AdminDashboard handleLogout={handleLogout} />
      )}

      {first === "employees" && (
        <EmployeeDashboard
          data={loggedInUser}
          handleLogout={handleLogout}
        />
      )}
    </>
  );
}

export default App;