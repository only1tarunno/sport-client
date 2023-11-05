import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import SubSectionbanner from "../../components/SubSectionbanner/SubSectionbanner";
import bg from "../../assets/404-bg.png";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <SubSectionbanner
        title="Error Page"
        subTitle="Error 404"
      ></SubSectionbanner>
      <div
        className=" bg-cover bg-no-repeat bg-center min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="text-center">
          <h2 className="text-[#3c8599] font-bold text-7xl lg:text-[200px]">
            404
          </h2>
          <h3 className="font-bold text-[#212121] text-3xl">
            Sorry we can`t find that page!
          </h3>
          <div className="mt-4">
            <Link to="/">
              <button className="btn text-lg">Take me home</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
