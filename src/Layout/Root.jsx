import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { useEffect } from "react";
import { initFlowbite } from "flowbite";

const Root = () => {
  useEffect(() => {
    initFlowbite();
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
