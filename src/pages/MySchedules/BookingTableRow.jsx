import PropTypes from "prop-types";
import { useState } from "react";
import useAxiosSecure from "../../components/hooks/useAxiosSecure";
const BookingTableRow = ({ work }) => {
  const {
    _id,
    serviceImage,
    serviceName,
    date,
    servicePrice,
    workStatus,
    address,
  } = work;
  const [status, setStatus] = useState(workStatus);
  const axiosSecure = useAxiosSecure();

  const handleStatus = (e) => {
    const value = e.target.value;
    setStatus(value);
    const data = { value };
    axiosSecure.patch(`/bookings/${_id}`, data).then((res) => {
      console.log(res.data);
    });
  };
  return (
    <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600 text-center">
      <th
        scope="row"
        className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <img
          className="w-40 rounded mx-auto"
          src={serviceImage}
          alt="Jese image"
        />
      </th>
      <td className="px-6 py-4">{serviceName}</td>
      <td className="px-6 py-4">{date}</td>
      <td className="px-6 py-4">{address}</td>
      <td className="px-6 py-4">{servicePrice}</td>
      <td className="px-6 py-4">
        <select value={status} onChange={handleStatus} className="border-none">
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </td>
    </tr>
  );
};

export default BookingTableRow;
BookingTableRow.propTypes = {
  work: PropTypes.object.isRequired,
};
