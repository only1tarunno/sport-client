import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { useEffect } from "react";
import { initFlowbite } from "flowbite";
import Footer from "../components/Footer/Footer";

const Root = () => {
  useEffect(() => {
    initFlowbite();
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
