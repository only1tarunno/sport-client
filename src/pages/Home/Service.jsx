import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const {
    _id,
    serviceImage,
    serviceName,
    serviceDescription,
    serviceProviderImage,
    serviceProviderName,
    servicePrice,
  } = service;

  return (
    <div>
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          className="object-cover w-full  rounded-t-lg h-72 md:w-72 md:rounded-none md:rounded-l-lg"
          src={serviceImage}
          alt=""
        />
        <div className="flex flex-col justify-between p-4  ms-0 md:ms-8 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center md:text-start">
            {serviceName}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-control text-center md:text-start">
            {serviceDescription}
          </p>
          <div className="flex items-center mb-4 justify-center md:justify-start">
            <img
              className="w-14 h-14 rounded-full object-cover"
              src={serviceProviderImage}
              alt="Rounded avatar"
            ></img>

            <div className="ms-3">
              <p className="font-normal text-gray-700 dark:text-gray-400 text-control">
                {serviceProviderName}
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400 text-control">
                $ {servicePrice} per session
              </p>
            </div>
          </div>

          <Link to={`services/${_id}`}>
            <button className="btn">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;

Service.propTypes = {
  service: PropTypes.object.isRequired,
};
