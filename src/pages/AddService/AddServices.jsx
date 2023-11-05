import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import axios from "axios";
import Swal from "sweetalert2";

const AddServices = () => {
  const { user } = useContext(AuthContext);

  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceImage = form.serviceImage.value;
    const serviceName = form.serviceName.value;
    const serviceProviderImage = user.photoURL;
    const serviceProviderName = user.displayName;
    const email = user.email;
    const servicePrice = form.servicePrice.value;
    const serviceProviderLocation = form.serviceProviderLocation.value;
    const serviceDescription = form.serviceDescription.value;
    const serviceProviderShortDescription =
      form.serviceProviderShortDescription.value;
    const data = {
      serviceImage,
      serviceName,
      serviceProviderName,
      email,
      servicePrice,
      serviceProviderLocation,
      serviceProviderImage,
      serviceDescription,
      serviceProviderShortDescription,
    };
    axios.post("http://localhost:5000/services", data).then(() => {
      Swal.fire({
        icon: "success",
        title: "Service is Added",
      });
    });
  };
  return (
    <div>
      <h2 className="font-bold text-[#212121] text-3xl lg:text-5xl my-3 text-center">
        Add Service
      </h2>
      <form onSubmit={handleAddService} className="max-w-3xl mx-auto">
        <input
          type="text"
          placeholder="Service Image URL"
          name="serviceImage"
          required="required"
          className="w-full my-4 p-3 rounded focus:outline-none border text-[#212121] "
        />
        <input
          type="text"
          placeholder="Service Name"
          name="serviceName"
          required="required"
          className="w-full my-4 p-3 rounded focus:outline-none border text-[#212121] "
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input
            type="text"
            defaultValue={user.displayName}
            disabled
            required="required"
            className="w-full my-4 p-3 rounded focus:outline-none border text-[#212121] "
          />
          <input
            type="email"
            value={user.email}
            disabled
            required="required"
            className="w-full my-4 p-3 rounded focus:outline-none border text-[#212121] "
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input
            type="number"
            placeholder="Price"
            name="servicePrice"
            required="required"
            className="w-full my-4 p-3 rounded focus:outline-none border text-[#212121] "
          />
          <input
            type="text"
            placeholder="Service Area"
            name="serviceProviderLocation"
            required="required"
            className="w-full my-4 p-3 rounded focus:outline-none border text-[#212121] "
          />
        </div>
        <input
          type="text"
          placeholder="Service Provider Short Description"
          name="serviceProviderShortDescription"
          required="required"
          className="w-full my-4 p-3 rounded focus:outline-none border text-[#212121] "
        />

        <textarea
          name="serviceDescription"
          id=""
          placeholder="Service Description"
          className="w-full my-4 p-3 rounded focus:outline-none border text-[#212121] "
          cols="30"
          rows="6"
        ></textarea>
        <input
          type="submit"
          value="Add Service"
          className="w-full rounded my-4 py-3 cursor-pointer text-xl bg-[#3a1e77] hover:bg-[#281a47] border-[#3a1e77] hover:text-white text-white"
        />
      </form>
    </div>
  );
};

export default AddServices;