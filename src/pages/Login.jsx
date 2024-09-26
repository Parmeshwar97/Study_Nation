import image from "../assets/login.png";
import Template from "../components/Template";

export default function Login({ setIsLoggedIn, navigate }) {
  return (
    <Template
      type={"login"}
      title={"Welcome Back"}
      image={image}
      desc1={"Build skills for today, tomorrow, and beyond."}
      desc2={"Education to future-proof your career."}
      btn={"Sing In"}
      setIsLoggedIn={setIsLoggedIn}
      navigate={navigate}
    />
  );
}
