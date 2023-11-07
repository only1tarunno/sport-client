import ScrollToTop from "../../components/ScrollTop/ScrollTop";
import SubSectionbanner from "../../components/SubSectionbanner/SubSectionbanner";
import { useEffect } from "react";
import useAuth from "../../components/hooks/useAuth";
import useAxiosSecure from "../../components/hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import RelatedService from "./RelatedService";

const SingleService = () => {
  const { user } = useAuth();
  const [spin, setspin] = useState(false);
  const [service, setService] = useState({});
  const [related, setRelated] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();

  useEffect(() => {
    axiosSecure.get(`/services/${id}`).then((res) => {
      setService(res.data);
      setspin(true);
    });
  }, [axiosSecure, id]);

  const {
    email,
    serviceImage,
    serviceName,
    serviceDescription,
    serviceProviderImage,
    serviceProviderName,
    servicePrice,
    serviceProviderLocation,
  } = service;

  const handleBook = (e) => {
    e.preventDefault();
    const form = e.target;

    const userEmail = user?.email;
    const date = form.date.value;
    const address = form.address.value;
    const data = {
      serviceImage,
      serviceName,
      email,
      userEmail,
      date,
      address,
      servicePrice,
      workStatus: "Pending",
    };

    axiosSecure.post("/bookings", data).then(() => {
      form.reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Service is Booked",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };

  useEffect(() => {
    axiosSecure.get(`/myservices?email=${email}`).then((res) => {
      setRelated(res.data);
    });
  }, [axiosSecure, email]);

  return (
    <div>
      <ScrollToTop></ScrollToTop>

      <div>
        {/* spinner start here  */}
        {spin ? (
          <div>
            <Helmet>
              <title>ClubFit | {serviceName}</title>
            </Helmet>
            {/* banner  */}
            <div>
              <SubSectionbanner
                title={serviceName}
                subTitle={serviceName}
              ></SubSectionbanner>
            </div>
            <div className="container mx-auto px-5 lg:px-0 my-10 ">
              {/* serviceprovider info  */}
              <div className=" space-y-3  p-10 flex flex-col  gap-3  items-center justify-start w-full lg:w-1/2 mx-auto">
                <h2 className="font-bold text-2xl  lg:text-3xl">
                  About Provider
                </h2>
                <img
                  src={serviceProviderImage}
                  className="w-24 rounded"
                  alt=""
                />
                <div className="flex-1 text-center lg:text-start">
                  <h2 className="font-bold text-2xl">
                    Name : {serviceProviderName}
                  </h2>
                  <p className="font-medium  text-xl">
                    Service Area : {serviceProviderLocation}
                  </p>
                </div>
              </div>
              {/* service info  */}
              <div className="space-y-3  rounded-md my-10 flex flex-col lg:flex-row gap-5 lg:gap-8 items-center justify-start ">
                <div className="w-full lg:w-1/2">
                  <img
                    className="object-cover w-full  rounded-lg  "
                    src={serviceImage}
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-between w-full lg:w-1/2  ms-0 md:ms-2 leading-normal">
                  <h5 className="mb-2 text-2xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white text-center md:text-start">
                    {serviceName}
                  </h5>
                  <p className="mb-3 font-normal  text-gray-700 dark:text-gray-400 text-center md:text-start lg:text-xl text-base">
                    {serviceDescription}
                  </p>
                  <p className="mb-3 text-xl lg:text-3xl font-bold text-gray-700 dark:text-gray-400  text-center md:text-start">
                    Service Area : {serviceProviderLocation}
                  </p>
                  <div className="flex items-center mb-4 justify-center md:justify-start">
                    <img
                      className="w-14 h-14 rounded-full object-cover"
                      src={serviceProviderImage}
                      alt="Rounded avatar"
                    ></img>

                    <div className="ms-3">
                      <p className="text-lg font-medium text-gray-700 dark:text-gray-400 text-control">
                        {serviceProviderName}
                      </p>
                      <p className="font-normal text-gray-700 dark:text-gray-400 text-control">
                        $ {servicePrice} per session
                      </p>
                    </div>
                  </div>
                  {/* <!-- Modal toggle button --> */}
                  {user?.email === email ? (
                    <div>
                      <button
                        onClick={() => {
                          Swal.fire({
                            icon: "Error",
                            title: "You Can't Book Your Own Service",
                          });
                        }}
                        className="btn w-full"
                      >
                        Book Now
                      </button>
                    </div>
                  ) : (
                    <div>
                      <button
                        className="btn w-full"
                        onClick={() =>
                          document.getElementById("my_modal_3").showModal()
                        }
                      >
                        Book Now
                      </button>

                      <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                          <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                              ✕
                            </button>
                          </form>
                          {/* form start here  */}
                          <form className="space-y-6" onSubmit={handleBook}>
                            <div>
                              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Service Name
                              </label>
                              <input
                                type="text"
                                placeholder="Service Name"
                                name="serviceName"
                                defaultValue={serviceName}
                                disabled
                                required="required"
                                className="w-full  p-3 rounded focus:outline-none border border-[#ccc] text-[#212121] "
                              />
                            </div>
                            <div>
                              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Service Image
                              </label>
                              <input
                                type="text"
                                placeholder="Service Image URL"
                                name="serviceImage"
                                defaultValue={serviceImage}
                                disabled
                                required="required"
                                className="w-full p-3 rounded focus:outline-none border border-[#ccc] text-[#212121] "
                              />
                            </div>
                            <div>
                              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Provider Email
                              </label>
                              <input
                                type="email"
                                defaultValue={email}
                                disabled
                                required="required"
                                className="w-full  p-3 rounded focus:outline-none border border-[#ccc] text-[#212121] "
                              />
                            </div>
                            <div>
                              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Your Email
                              </label>
                              <input
                                type="email"
                                defaultValue={user?.email}
                                disabled
                                required="required"
                                className="w-full  p-3 rounded focus:outline-none border border-[#ccc] text-[#212121] "
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="date"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                Service Taking Date
                              </label>
                              <input
                                type="date"
                                placeholder="Pick A Date"
                                id="date"
                                name="date"
                                required
                                className="w-full  p-3 rounded focus:outline-none border border-[#ccc] text-[#212121] "
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="address"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                Your Address
                              </label>
                              <input
                                type="text"
                                placeholder="Your Address"
                                id="address"
                                name="address"
                                required
                                className="w-full  p-3 rounded focus:outline-none border border-[#ccc] text-[#212121] "
                              />
                            </div>
                            <div>
                              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Price
                              </label>
                              <input
                                type="text"
                                placeholder="Price"
                                defaultValue={servicePrice}
                                disabled
                                name="servicePrice"
                                required="required"
                                className="w-full  p-3 rounded focus:outline-none border border-[#ccc] text-[#212121] "
                              />
                            </div>

                            <button type="submit" className="btn w-full">
                              Purchase this Service
                            </button>
                          </form>
                        </div>
                      </dialog>
                    </div>
                  )}
                </div>
              </div>
              {/* retated sevice section */}
              <div>
                {related.length > 1 ? (
                  <div>
                    <h5 className="text-2xl text-center lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mt-10 md:mt16 lg:mt-36 mb-5 md:mb-10">
                      {serviceProviderName}&apos;s other services.
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                      {related
                        .filter((data) => data._id !== id)
                        .map((data) => (
                          <RelatedService
                            key={data._id}
                            data={data}
                          ></RelatedService>
                        ))}
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className=" flex items-center justify-center  min-h-screen">
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
    </div>
  );
};

export default SingleService;
