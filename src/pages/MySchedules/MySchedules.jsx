import { useState } from "react";
import ScrollToTop from "../../components/ScrollTop/ScrollTop";
import SubSectionbanner from "../../components/SubSectionbanner/SubSectionbanner";
import { useEffect } from "react";
import useAxiosSecure from "../../components/hooks/useAxiosSecure";
import useAuth from "../../components/hooks/useAuth";
import MyBookingCard from "./MyBookingCard";
import noBook from "../../assets/no-book.jpg";

const MySchedules = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [message, setmessage] = useState(true);
  useEffect(() => {
    axiosSecure.get(`bookings?email=${user?.email}`).then((res) => {
      setBookings(res.data);
      setmessage(false);
    });
  }, [axiosSecure, user?.email]);

  return (
    <div>
      <ScrollToTop></ScrollToTop>
      <div>
        <SubSectionbanner
          title="My Schedules"
          subTitle="MySchedules"
        ></SubSectionbanner>
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
        <h2 className="font-bold text-3xl my-14 lg:text-5xl text-center">
          My Pending works
        </h2>
      </div>
    </div>
  );
};

export default MySchedules;
