import React from "react";
import image from "../assets/signup.png";
import Template from "../components/Template";

export default function SignUp({ setIsLoggedIn, navigate }) {
  return (
    <Template
      type={"signUp"}
      title={"Join the millions learning to code with StudyNation for free"}
      image={image}
      desc1={"Build skills for today, tomorrow, and beyond."}
      desc2={"Education to future-proof your career."}
      btn={"Create Account"}
      setIsLoggedIn={setIsLoggedIn}
      navigate={navigate}
    />
  );
}
