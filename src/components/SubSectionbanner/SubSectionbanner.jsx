import { Link } from "react-router-dom";
import img from "../../assets/error-banner.jpg";
import PropTypes from "prop-types";

const SubSectionbanner = ({ title, subTitle }) => {
  return (
    <div
      className="error-banner min-h-[400px] flex  justify-center items-center"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className=" z-30 text-center space-y-2">
        <h2 className="font-bold text-4xl lg:text-7xl text-white ">{title}</h2>
        <p className="text-white font-medium text-xl">
          <Link to="/">Home</Link> | {subTitle}
        </p>
      </div>
    </div>
  );
};

export default SubSectionbanner;
SubSectionbanner.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};
