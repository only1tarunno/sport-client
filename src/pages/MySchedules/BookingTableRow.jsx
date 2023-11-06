import PropTypes from "prop-types";
const BookingTableRow = ({ work }) => {
  const { serviceImage, serviceName, date, servicePrice } = work;
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
      <td className="px-6 py-4">{servicePrice}</td>
      <td className="px-6 py-4">SEO Specialist</td>
    </tr>
  );
};

export default BookingTableRow;
BookingTableRow.propTypes = {
  work: PropTypes.object.isRequired,
};
