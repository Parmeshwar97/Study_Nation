import { Routes, Route, useNavigate } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col p-3  overflow-x-hidden gap-5 items-center h-[100vh] w-[100vw]">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} navigate={navigate} />
      <div className="w-8/12 flex items-center justify-center h-full">
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<h1>Home</h1>}/>
            <Route
              path="/login"
              element={<Login setIsLoggedIn={setIsLoggedIn} navigate={navigate}/>}
            />
            <Route
              path="/signup"
              element={<SignUp setIsLoggedIn={setIsLoggedIn} navigate={navigate}/>}
            />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<div>No Page Found</div>} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
