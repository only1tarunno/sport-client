import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
const RelatedService = ({ data }) => {
  const {
    _id,

    serviceImage,
    serviceName,

    serviceProviderImage,
    serviceProviderName,
    servicePrice,
  } = data;

  const navigate = useNavigate();
  const handlenavigate = (id) => {
    navigate(`/services/${id}`);
  };

  return (
    <div>
      <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img
          className="rounded-t-lg h-52 object-cover w-full"
          src={serviceImage}
          alt=""
        />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            {serviceName}
          </h5>
          <div className="flex items-center mb-4 justify-center ">
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

          <button
            onClick={() => handlenavigate(_id)}
            className="btn w-full mt-2 inline-bloc"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default RelatedService;
RelatedService.propTypes = {
  data: PropTypes.object.isRequired,
};
