import { useLoaderData } from "react-router-dom";
import ScrollToTop from "../../components/ScrollTop/ScrollTop";
import SubSectionbanner from "../../components/SubSectionbanner/SubSectionbanner";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { initFlowbite } from "flowbite";

const SingleService = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
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
    };
    console.log(data);
  };

  useEffect(() => {
    initFlowbite();
  }, [user]);

  return (
    <div>
      <ScrollToTop></ScrollToTop>
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
          <h2 className="font-bold text-2xl  lg:text-3xl">About Provider</h2>
          <img src={serviceProviderImage} className="w-24 rounded" alt="" />
          <div className="flex-1 text-center lg:text-start">
            <h2 className="font-bold text-2xl">Name : {serviceProviderName}</h2>
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
            <button
              data-modal-target="authentication-modal"
              data-modal-toggle="authentication-modal"
              className="btn"
            >
              Book Now
            </button>

            {/* <!-- Main modal --> */}
            <div
              id="authentication-modal"
              tabIndex="-1"
              aria-hidden="true"
              className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div className="relative w-full max-w-md max-h-full">
                {/* <!-- Modal content --> */}
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <button
                    type="button"
                    className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="authentication-modal"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                  <div className="px-6 py-6 lg:px-8">
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
                          type="number"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
