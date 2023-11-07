import Swal from "sweetalert2";
import useAuth from "../../components/hooks/useAuth";
import useAxiosSecure from "../../components/hooks/useAxiosSecure";
import SubSectionbanner from "../../components/SubSectionbanner/SubSectionbanner";
import { Helmet } from "react-helmet-async";

const AddServices = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceImage = form.serviceImage.value;
    const serviceName = form.serviceName.value;
    const serviceProviderImage = user?.photoURL;
    const serviceProviderName = user?.displayName;
    const email = user?.email;
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
    axiosSecure.post("/services", data).then(() => {
      Swal.fire({
        icon: "success",
        title: "Service is Added",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };
  return (
    <div>
      <Helmet>
        <title>ClubFit | Add Service</title>
      </Helmet>
      <div>
        <SubSectionbanner
          title="Add Service"
          subTitle="AddService"
        ></SubSectionbanner>
      </div>
      <div className="container mx-auto px-5 lg:px-0 py-14">
        <h2 className="font-bold text-[#212121] text-3xl lg:text-5xl my-5 text-center">
          Fill The Form TO Add Service
        </h2>
        <form
          onSubmit={handleAddService}
          className="max-w-3xl mx-auto shadow-md p-8 rounded-md"
        >
          <input
            type="text"
            placeholder="Service Image URL"
            name="serviceImage"
            required="required"
            className="w-full my-4 p-3 rounded focus:outline-none border border-[#ccc] text-[#212121] "
          />
          <input
            type="text"
            placeholder="Service Name"
            name="serviceName"
            required="required"
            className="w-full my-4 p-3 rounded focus:outline-none border border-[#ccc] text-[#212121] "
          />
          <input
            type="text"
            defaultValue={user?.photoURL}
            disabled
            required="required"
            className="w-full my-4 p-3 rounded focus:outline-none border border-[#ccc] text-[#212121] "
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              type="text"
              defaultValue={user?.displayName}
              disabled
              required="required"
              className="w-full my-4 p-3 rounded focus:outline-none border border-[#ccc] text-[#212121] "
            />
            <input
              type="email"
              defaultValue={user?.email}
              disabled
              required="required"
              className="w-full my-4 p-3 rounded focus:outline-none border border-[#ccc] text-[#212121] "
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Price"
              name="servicePrice"
              required="required"
              className="w-full my-4 p-3 rounded focus:outline-none border border-[#ccc] text-[#212121] "
            />
            <input
              type="text"
              placeholder="Service Area"
              name="serviceProviderLocation"
              required="required"
              className="w-full my-4 p-3 rounded focus:outline-none border border-[#ccc] text-[#212121] "
            />
          </div>

          <textarea
            name="serviceDescription"
            id=""
            placeholder="Service Description"
            className="w-full my-4 p-3 rounded focus:outline-none border border-[#ccc] text-[#212121] "
            cols="30"
            rows="6"
          ></textarea>
          <input
            type="submit"
            value="Add Service"
            className="w-full rounded my-4 py-3 cursor-pointer text-xl bg-[#3c8599] hover:bg-[#281a47] border border-[#ccc]-[#3a1e77] hover:text-white text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default AddServices;
