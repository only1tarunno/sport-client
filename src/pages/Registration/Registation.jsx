import { FaEye, FaEyeSlash } from "react-icons/fa6";
import gg from "../../assets/google.png";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import img from "../../assets/log-bg.jpg";
import { updateProfile } from "firebase/auth";
import useAuth from "../../components/hooks/useAuth";
import { Helmet } from "react-helmet-async";

const Registation = () => {
  const { register, googleLogin, setUser } = useAuth();
  const [showpass, setshowpass] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photourl = e.target.photourl.value;
    const email = e.target.email.value;
    const pass = e.target.pass.value;

    if (pass.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Please Enter Atleast 6 Character",
      });
      return;
    } else if (!/(?=.*[A-Z])/.test(pass)) {
      Swal.fire({
        icon: "error",
        title: "Please Enter Atleast One Capital Letter",
      });
      return;
    } else if (!/^(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹]).*$/.test(pass)) {
      Swal.fire({
        icon: "error",
        title: "Please Enter Atleast One Special Character",
      });
      return;
    }

    // register in user
    register(email, pass)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: photourl,
        }).then(() =>
          setUser({ displayName: name, photoURL: photourl, email: email })
        );
        Swal.fire({
          icon: "success",
          title: "Thank You",
          text: "Your Registration was Succesful",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops",
          text: err.message,
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
        <title>ClubFit | Registration</title>
      </Helmet>
      <div className="hero-content lg:border-2 border-[rgba(255,255,255,.2)] bg-transparent backdrop-blur-xl shadow-sm w-full lg:w-[600px] rounded-lg">
        <div className="flex items-center justify-center gap-5 flex-col py-20">
          <div className="w-full  p-10 pb-0">
            <h2 className="text-center mb-4 font-bold text-5xl text-white">
              Register
            </h2>
            <form onSubmit={handleRegister} className="loginForm">
              <input
                type="text"
                placeholder="Name"
                name="name"
                required="required"
                className="w-full my-4 p-3 rounded focus:outline-none border bg-transparent border-[rgba(255,255,255,.2)] text-white"
              />
              <input
                type="text"
                placeholder="Photo Url"
                name="photourl"
                className="w-full p-3 rounded focus:outline-none border bg-transparent border-[rgba(255,255,255,.2)] text-white"
              />
              <input
                type="email"
                required="required"
                placeholder="Email"
                name="email"
                className="w-full my-4 p-3 rounded focus:outline-none border bg-transparent border-[rgba(255,255,255,.2)] text-white"
              />
              <div className="relative">
                <input
                  type={showpass ? "text" : "password"}
                  placeholder="password"
                  required="required"
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
                value="Register"
                className="w-full rounded my-4 py-3 cursor-pointer text-xl bg-[#3a1e77] hover:bg-[#281a47] border-[#3a1e77] hover:text-white text-white"
              />
            </form>
            <p className="text-center text-white">
              Already have an account?{" "}
              <Link to="/login" className="font-bold">
                Login
              </Link>
            </p>
          </div>
          <div className="w-full lg:w-[40%]">
            <div className="flex flex-col w-full border-opacity-50 px-10 lg:px-0">
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

export default Registation;
