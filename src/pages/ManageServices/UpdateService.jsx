import Swal from "sweetalert2";
import SubSectionbanner from "../../components/SubSectionbanner/SubSectionbanner";

import useAxiosSecure from "../../components/hooks/useAxiosSecure";
import { useNavigate, useParams } from "react-router-dom";
import ScrollToTop from "../../components/ScrollTop/ScrollTop";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { useEffect } from "react";

const UpdateService = () => {
  const [spin, setspin] = useState(false);
  const [service, setService] = useState({});
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();

  useEffect(() => {
    axiosSecure.get(`/services/${id}`).then((res) => {
      setService(res.data);
      setspin(true);
    });
  }, [axiosSecure, id]);

  const {
    _id,
    serviceImage,
    serviceName,
    serviceProviderName,
    email,
    servicePrice,
    serviceProviderLocation,
    serviceProviderImage,
    serviceDescription,
  } = service;
  const navigate = useNavigate();

  const handleUpdateService = (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceImage = form.serviceImage.value;
    const serviceName = form.serviceName.value;
    const serviceProviderImage = form.serviceProviderImage.value;
    const serviceProviderName = form.serviceProviderName.value;
    const email = form.email.value;
    const servicePrice = form.servicePrice.value;
    const serviceProviderLocation = form.serviceProviderLocation.value;
    const serviceDescription = form.serviceDescription.value;

    const data = {
      serviceImage,
      serviceName,
      serviceProviderName,
      email,
      servicePrice,
      serviceProviderLocation,
      serviceProviderImage,
      serviceDescription,
    };
    console.log(data);
    axiosSecure.patch(`/myservices/${_id}`, data).then(() => {
      Swal.fire({
        icon: "success",
        title: "Service is Updated",
      });
      navigate(-1);
    });
  };
  return (
    <div>
      <Helmet>
        <title>ClubFit | Update Service</title>
      </Helmet>
      <ScrollToTop></ScrollToTop>
      {/* spinner start here  */}
      {spin ? (
        <div>
          <div>
            <SubSectionbanner
              title="Update Service"
              subTitle="UpdateService"
            ></SubSectionbanner>
          </div>
          <div className="container mx-auto px-5 lg:px-0 py-14">
            <h2 className="font-bold text-[#212121] text-3xl lg:text-5xl my-5 text-center">
              Update Your Service
            </h2>
            <form
              onSubmit={handleUpdateService}
              className="max-w-3xl mx-auto shadow-md p-8 rounded-md"
            >
              <label htmlFor="">Service Image URL</label>
              <input
                type="text"
                placeholder="Service Image URL"
                name="serviceImage"
                defaultValue={serviceImage}
                required="required"
                className="w-full my-4 p-3 rounded focus:outline-none border border-[#ccc] text-[#212121] "
              />
              <label htmlFor="">Service Name</label>
              <input
                type="text"
                placeholder="Service Name"
                name="serviceName"
                defaultValue={serviceName}
                required="required"
                className="w-full my-4 p-3 rounded focus:outline-none border border-[#ccc] text-[#212121] "
              />
              <label htmlFor="">Your Photo URL</label>
              <input
                type="text"
                defaultValue={serviceProviderImage}
                disabled
                name="serviceProviderImage"
                required="required"
                className="w-full my-4 p-3 rounded focus:outline-none border border-[#ccc] text-[#212121] "
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="">Your Name</label>
                  <input
                    type="text"
                    defaultValue={serviceProviderName}
                    name="serviceProviderName"
                    disabled
                    required="required"
                    className="w-full my-4 p-3 rounded focus:outline-none border border-[#ccc] text-[#212121] "
                  />
                </div>
                <div>
                  <label htmlFor="">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    defaultValue={email}
                    disabled
                    required="required"
                    className="w-full my-4 p-3 rounded focus:outline-none border border-[#ccc] text-[#212121] "
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="">Service Price</label>
                  <input
                    type="text"
                    placeholder="Price"
                    name="servicePrice"
                    defaultValue={servicePrice}
                    required="required"
                    className="w-full my-4 p-3 rounded focus:outline-none border border-[#ccc] text-[#212121] "
                  />
                </div>
                <div>
                  <label htmlFor="">Service Area</label>
                  <input
                    type="text"
                    placeholder="Service Area"
                    defaultValue={serviceProviderLocation}
                    name="serviceProviderLocation"
                    required="required"
                    className="w-full my-4 p-3 rounded focus:outline-none border border-[#ccc] text-[#212121] "
                  />
                </div>
              </div>

              <textarea
                name="serviceDescription"
                id=""
                placeholder="Service Description"
                defaultValue={serviceDescription}
                className="w-full my-4 p-3 rounded focus:outline-none border border-[#ccc] text-[#212121] "
                cols="30"
                rows="6"
              ></textarea>
              <input
                type="submit"
                value="Update"
                className="w-full rounded my-4 py-3 cursor-pointer text-xl bg-[#3c8599] hover:bg-[#281a47] border border-[#ccc]-[#3a1e77] hover:text-white text-white"
              />
            </form>
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
  );
};

export default UpdateService;
