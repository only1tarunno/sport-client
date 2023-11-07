import PropTypes from "prop-types";
const MyBookingCard = ({ booking }) => {
  const { serviceImage, serviceName, date, servicePrice, address, workStatus } =
    booking;

  return (
    <div>
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          className="object-cover w-full h-56 rounded-t-lg"
          src={serviceImage}
          alt=""
        />
        <div className="flex flex-col justify-between p-4  ms-0 md:ms-8 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            {serviceName}
          </h5>

          <p className="mb-3 font-bold text-gray-700 dark:text-gray-400 text-control text-center">
            Date : {date}
          </p>
          <p className="mb-3 font-bold text-gray-700 dark:text-gray-400 text-control text-center">
            Service Area : {address}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400 text-control text-center">
            $ {servicePrice} per session
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400 text-control pt-2 text-center">
            <span className="font-bold">Status:</span>{" "}
            <span
              className={`text-white p-1 ${
                workStatus === "Pending"
                  ? "bg-[#ee3636]"
                  : workStatus === "Completed"
                  ? "bg-[#3c8599]"
                  : "bg-[#ec5a17]"
              }`}
            >
              {workStatus}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyBookingCard;
MyBookingCard.propTypes = {
  booking: PropTypes.object.isRequired,
};
