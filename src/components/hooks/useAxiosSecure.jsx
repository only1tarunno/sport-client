import axios from "axios";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        console.log("error from hook", err.response);
        if (err.response.status === 401 || err.response.status === 403)
          logout()
            .then(() => {
              navigate("/login");
            })
            .catch((error) => {
              console.log(error);
            });
      }
    );
  }, [logout, navigate]);
  return axiosSecure;
};

export default useAxiosSecure;
