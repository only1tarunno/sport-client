import Swal from "sweetalert2";
import SubSectionbanner from "../../components/SubSectionbanner/SubSectionbanner";

import useAxiosSecure from "../../components/hooks/useAxiosSecure";
import { useLoaderData, useNavigate } from "react-router-dom";
import ScrollToTop from "../../components/ScrollTop/ScrollTop";

const UpdateService = () => {
  const service = useLoaderData();
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
  const axiosSecure = useAxiosSecure();

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
      <ScrollToTop></ScrollToTop>
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
  );
};

export default UpdateService;
