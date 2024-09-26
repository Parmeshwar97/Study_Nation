import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

export default function SignupForm({ setIsLoggedIn, navigate }) {
  const [showPass, setShowPass] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const [accountType, setAccountType] = useState("student");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    pass: "",
    newPass: "",
    email: "",
  });
  function handleChange(e) {
    setFormData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (formData.pass !== formData.newPass) {
      toast.error("Password do not match!");
      navigate("/signup");
    } else {
      toast.success("Signed In");
      const accountData = {
        ...formData
      }
      const finalData = {
        ...accountData,
        accountType
      }
      console.log('Printing Final Data');
      console.log(finalData);
      
      setIsLoggedIn(true);
      navigate("/dashboard");
    }
  }
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="flex p-1 gap-0 max-w-max rounded-full bg-[#182441]">
        <button
          className={`py-2 px-5 rounded-full ${
            accountType === "student" ? "bg-[#0f182c]" : "bg-transparent"
          }`}
          onClick={() => setAccountType("student")}
        >
          Student
        </button>
        <button
          className={`py-2 px-5 rounded-full ${
            accountType === "instructor" ? "bg-[#0f182c]" : "bg-transparent"
          }`}
          onClick={() => setAccountType("instructor")}
        >
          Instructor
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 w-full relative">
          <div className="grid grid-cols-2 gap-5">
            <label>
              <p>First Name*</p>
              <input
                required
                type="text"
                name="firstName"
                onChange={handleChange}
                placeholder="Enter First Name"
                id="firstName"
              />
            </label>

            <label>
              <p>Last Name*</p>
              <input
                required
                type="text"
                name="lastName"
                onChange={handleChange}
                placeholder="Enter Last Name"
                id="lastName"
              />
            </label>
          </div>

          <label htmlFor="">
            {" "}
            <p>Email Address*</p>
            <input
              required
              type="email"
              name="email"
              id="email"
              value={formData.email}
              placeholder="Enter Email"
              onChange={handleChange}
            />
          </label>

          <div className="grid grid-cols-2 gap-5">
            <label className="relative ">
              {" "}
              <p>Create Password</p>
              <input
                required
                type={showPass ? "text" : "password"}
                name="pass"
                value={formData.pass}
                id="pass"
                placeholder="Enter Password"
                onChange={handleChange}
              />
              <span
                className="absolute bottom-2 right-3 text-xl"
                onClick={() => setShowPass(!showPass)}
              >
                {!showPass ? <IoMdEye /> : <IoMdEyeOff />}
              </span>
            </label>
            <label className="relative ">
              {" "}
              <p>Confirm Password</p>
              <input
                required
                type={isConfirm ? "text" : "password"}
                name="newPass"
                value={formData.newPass}
                id="newPass"
                placeholder="Confirm Password"
                onChange={handleChange}
              />
              <span
                className="absolute bottom-2 right-3 text-xl"
                onClick={() => setIsConfirm(!isConfirm)}
              >
                {!isConfirm ? <IoMdEye /> : <IoMdEyeOff />}
              </span>
            </label>{" "}
          </div>
          <button className="bg-yellow-400 py-1 mt-8 font-bold rounded-md text-black w-full">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}
