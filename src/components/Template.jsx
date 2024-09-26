import React from "react";
import { FcGoogle } from "react-icons/fc";
import frame from "../assets/frame.png";
import LoginForm from "../components/LoginForm";
import SignupForm from "./SignupForm";

export default function Template({
  type,
  image,
  desc1,
  desc2,
  title,
  setIsLoggedIn,
  navigate,
}) {
  return (
    <div className="flex w-full items-center justify-between gap-40">
      <div className="flex w-1/2 flex-col gap-3 max-w-[1160px] ">
        <h1 className="font-bold text-3xl">{title}</h1>
        <div>
          <p className="text-gray-300">{desc1}</p>
          <p className="text-cyan-300">
            <i>{desc2}</i>
          </p>
        </div>

        {type !== "login" ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn} navigate={navigate} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} navigate={navigate} />
        )}

        <div className="flex items-center">
          <div className="my-5 text-center h-[1px] w-full bg-gray-500"></div>
          <p className="font-bold px-3">OR</p>
          <div className="my-5 text-center h-[1px] w-full bg-gray-500"></div>
        </div>

        <div className="flex justify-center py-1 font-semibold rounded-md w-full border-gray-400 border-[1px] bg-transparent">
          <span className="cursor-pointer flex items-center gap-2">
            <FcGoogle />
            Sign in with Google
          </span>
        </div>
      </div>

      <div className="w1/2 relative">
        <img src={frame} alt="frame" width={558} height={504} loading="lazy" />
        <img
          src={image}
          alt="image"
          width={558}
          height={504}
          loading="lazy"
          className="absolute -left-2 -top-2"
        />
      </div>
    </div>
  );
}
