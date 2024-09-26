import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import toast from "react-hot-toast";
export default function LoginForm({ setIsLoggedIn, navigate }) {
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  function handleChange(e) {
    setFormData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate('/dashboard');
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="email">Email Address*</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email address"
          />
        </div>
        <div className="flex flex-col gap-8 ">
          <div className="flex flex-col mt-3 relative">
            <label htmlFor="password">Password*</label>
            <input 
              type={showPass ? "text" : "password"}
              name="password"
              id="password"
              value={formData.password}
              placeholder="Enter Password"
              onChange={handleChange}
            />
            <span
              className="bottom-6 absolute right-3 text-xl cursor-pointer"
              onClick={() => setShowPass(!showPass)}
            >
              {!showPass ? <IoMdEye /> : <IoMdEyeOff />}
            </span>
            
            <Link
              to="#"
              className="text-end text-xs font-semibold text-teal-500"
            >
              Forgot Password
            </Link>
          </div>
          <button className="bg-yellow-400 py-1 font-bold rounded-md text-black w-full">
            Sign In
          </button>{" "}
        </div>
      </form>
    </div>
  );
}
