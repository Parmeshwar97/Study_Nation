import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.svg";
import toast from "react-hot-toast";

export default function Navbar({ isLoggedIn, setIsLoggedIn, navigate }) {
  function handleLogOut() {
    setIsLoggedIn(false);
    toast.error("Logged Out");
  }
  return (
    <div className="flex w-[100vw] justify-around items-center">
      <NavLink to="/">
        <img src={logo} alt="logo" height={32} width={160} loading="lazy" />
      </NavLink>
      <nav className="flex justify-around">
        <ul className="flex gap-3">
          <li className="flex gap-8">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="flex gap-4">
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>

      <div className="flex gap-3">
        {!isLoggedIn && (
          <NavLink to="/login">
            <button className="px-3 py-2 bg-slate-800 rounded-md">
              Log in
            </button>
          </NavLink>
        )}
        {!isLoggedIn && (
          <NavLink to="/signup">
            <button className="px-3 py-2 bg-slate-800 rounded-md">
              Sign up
            </button>
          </NavLink>
        )}
        {isLoggedIn && (
          <NavLink to="/login">
            <button
              className="px-3 py-2 bg-slate-800 rounded-md"
              onClick={handleLogOut}
            >
              Log out
            </button>
          </NavLink>
        )}
        {isLoggedIn && (
          <NavLink to="/dashboard">
            <button className="px-3 py-2 bg-slate-800 rounded-md">
              Dashboard
            </button>
          </NavLink>
        )}
      </div>
    </div>
  );
}
