import { useState } from "react";
import ScrollToTop from "../../components/ScrollTop/ScrollTop";
import SubSectionbanner from "../../components/SubSectionbanner/SubSectionbanner";
import { useEffect } from "react";
import useAxiosSecure from "../../components/hooks/useAxiosSecure";
import useAuth from "../../components/hooks/useAuth";
import MyBookingCard from "./MyBookingCard";
import noBook from "../../assets/no-book.jpg";
import BookingTableRow from "./BookingTableRow";
import { Helmet } from "react-helmet-async";

const MySchedules = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [works, setWorks] = useState([]);
  const [message, setmessage] = useState(true);
  const [spin, setspin] = useState(false);

  //   booked service fetch
  useEffect(() => {
    axiosSecure.get(`/bookings?email=${user?.email}`).then((res) => {
      setBookings(res.data);
      setmessage(false);
      setspin(true);
    });
  }, [axiosSecure, user?.email]);

  //   pending work fetch
  useEffect(() => {
    axiosSecure.get(`/pendings?email=${user?.email}`).then((res) => {
      setWorks(res.data);
      setmessage(false);
      setspin(true);
    });
  }, [axiosSecure, user?.email]);

  return (
    <div>
      <Helmet>
        <title>ClubFit | My Schedules</title>
      </Helmet>
      <ScrollToTop></ScrollToTop>
      <div>
        <SubSectionbanner
          title="My Schedules"
          subTitle="MySchedules"
        ></SubSectionbanner>
      </div>
      {/* spinner start here  */}
      <div>
        {spin ? (
          ""
        ) : (
          <div className=" flex items-center justify-center py-72">
            <div role="status" className="w-20">
              <svg
                aria-hidden="true"
                className="w-8 h-8 mr-12 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </div>
      <div className="container mx-auto px-5 lg:px-0 py-14">
        {/* booking setion  */}
        <h2 className="font-bold text-3xl lg:text-5xl text-center">
          My Bookings
        </h2>
        {bookings.length > 0 ? (
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mt-10">
            {bookings.map((booking) => (
              <MyBookingCard
                key={booking._id}
                booking={booking}
              ></MyBookingCard>
            ))}
          </div>
        ) : (
          <div>
            {message ? (
              ""
            ) : (
              <div className="py-14">
                <img src={noBook} className="w-64 mx-auto " alt="" />
                <h2 className="text-center font-bold text-4xl">No Services</h2>
                <p className="text-xl md:text-2xl font-medium text-center">
                  No bookings have been made yet. Please book a service to get
                  started.
                </p>
              </div>
            )}
          </div>
        )}

        {/* my pending work start here  */}
        <h2 className="font-bold text-3xl my-14 pt-14 lg:text-5xl text-center">
          My Pending works
        </h2>
        {/* table start here  */}
        <div>
          {works.length > 0 ? (
            <div className=" overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 text-center uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Image
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Service
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {works.map((work) => (
                    <BookingTableRow
                      key={work._id}
                      work={work}
                    ></BookingTableRow>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div>
              {message ? (
                ""
              ) : (
                <div className="py-14">
                  <img src={noBook} className="w-64 mx-auto " alt="" />
                  <h2 className="text-center font-bold text-4xl">
                    No Pending Works
                  </h2>
                  <p className="text-xl md:text-2xl font-medium text-center">
                    Whoops...This information in not available for this moment
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MySchedules;
