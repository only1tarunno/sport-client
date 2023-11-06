import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [spiner, setSpinner] = useState(true);

  const provider = new GoogleAuthProvider();

  // Google Login
  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };
  //   register user
  const register = (email, pass) => {
    setSpinner(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  // sing in
  const logIn = (email, pass) => {
    setSpinner(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  //   log out
  const logOut = () => {
    setSpinner(true);
    return signOut(auth);
  };

  //   auth observe
  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (currentuser) => {
      const userEmail = currentuser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentuser);

      setSpinner(false);
      // if user exist we provide a token
      if (currentuser) {
        axios
          .post("http://localhost:5000/jwt", loggedUser, {
            withCredentials: true,
          })
          .then(() => {});
      } else {
        axios
          .post("http://localhost:5000/logout", loggedUser, {
            withCredentials: true,
          })
          .then(() => {});
      }
    });

    return () => {
      subscribe();
    };
  }, []);

  const authInfo = {
    user,
    spiner,
    register,
    logIn,
    logOut,
    googleLogin,
    setUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;

AuthProviders.propTypes = {
  children: PropTypes.node.isRequired,
};
