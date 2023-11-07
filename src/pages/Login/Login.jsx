import { FaEye, FaEyeSlash } from "react-icons/fa6";
import gg from "../../assets/google.png";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import img from "../../assets/log-bg.jpg";
import useAuth from "../../components/hooks/useAuth";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { logIn, googleLogin } = useAuth();
  const [showpass, setshowpass] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.pass.value;

    // log in user
    logIn(email, pass)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Login Succesful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops",
          text: "Invalid username or password",
        });
      });
  };
  // google login
  const glogin = () => {
    googleLogin()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Thank You",
          text: "Google Login was Succesful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops",
          text: "Google Login is Incomplete",
        });
      });
  };
  return (
    <div
      className="flex justify-center items-center min-h-screen"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <Helmet>
        <title>ClubFit | Login</title>
      </Helmet>
      <div className="lg:border-2 border-[rgba(255,255,255,.2)] bg-transparent backdrop-blur-xl shadow-sm w-full lg:w-[600px] rounded-lg">
        <div className="flex items-center justify-center gap-5 flex-col py-20">
          <div className="w-full  p-10 pb-0">
            <h2 className="text-center mb-4 font-bold text-5xl text-white">
              Login
            </h2>
            <form onSubmit={handleLogin} className="loginForm">
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="w-full my-4 p-3 rounded focus:outline-none border bg-transparent border-[rgba(255,255,255,.2)] text-white"
              />
              <div className="relative">
                <input
                  type={showpass ? "text" : "password"}
                  placeholder="password"
                  name="pass"
                  className="w-full p-3 rounded focus:outline-none border bg-transparent border-[rgba(255,255,255,.2)] text-white"
                />
                <span
                  onClick={() => setshowpass(!showpass)}
                  className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer text-white"
                >
                  {showpass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                </span>
              </div>
              <input
                type="submit"
                value="LogIn"
                className="w-full rounded my-4 py-3 cursor-pointer text-xl bg-[#3a1e77] hover:bg-[#281a47] border-[#3a1e77] hover:text-white text-white"
              />
            </form>
            <p className="text-center text-white">
              Don’t have an account?{" "}
              <Link to="/register" className="font-bold">
                Create an account
              </Link>
            </p>
          </div>
          <div className="w-full lg:w-[40%]">
            <div className="flex flex-col w-full border-opacity-50 px-10 xl:px-0">
              <div className="text-center text-white">OR</div>
              <div
                onClick={glogin}
                className="w-full py-4 px-2 flex gap-2 rounded justify-center items-center mt-5 border border-[#331f5f] bg-[#331f5f] hover:bg-[#281a47] text-white cursor-pointer"
              >
                <span>
                  <img src={gg} className="w-5" alt="" />
                </span>
                <p className="font-medium">Continue with Google</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
