import { useState } from "react";
import SubSectionbanner from "../../components/SubSectionbanner/SubSectionbanner";
import useAuth from "../../components/hooks/useAuth";
import useAxiosSecure from "../../components/hooks/useAxiosSecure";
import { useEffect } from "react";
import ManageServiceCard from "./ManageServiceCard";
import Swal from "sweetalert2";
import ScrollToTop from "../../components/ScrollTop/ScrollTop";
import folder from "../../assets/folder.png";
import { Helmet } from "react-helmet-async";

const ManageServices = () => {
  const { user } = useAuth();
  const [spin, setspin] = useState(false);
  const [services, setServices] = useState([]);
  const [message, setmessage] = useState(true);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get(`/myservices?email=${user?.email}`).then((res) => {
      setServices(res.data);
      setspin(true);
      setmessage(false);
    });
  }, [axiosSecure, user?.email]);

  // delte funfion
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://zium-sport-server.vercel.app/myservices/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            const remaining = services.filter((service) => service._id !== id);
            setServices(remaining);
            Swal.fire("Deleted!", "Your product has been deleted.", "success");
          });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>ClubFit | My Services</title>
      </Helmet>
      <ScrollToTop></ScrollToTop>
      <div>
        <SubSectionbanner
          title="My Services"
          subTitle="MyServices"
        ></SubSectionbanner>
      </div>
      <div className="container mx-auto px-5 lg:px-0 my-14">
        {" "}
        {/* spinner start here  */}
        {spin ? (
          ""
        ) : (
          <div className=" flex items-center justify-center  py-72">
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
        {/* all services start here  */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 ">
          {services.length > 0 ? (
            services.map((service) => (
              <ManageServiceCard
                service={service}
                handleDelete={handleDelete}
                key={service._id}
              ></ManageServiceCard>
            ))
          ) : (
            <div className="col-span-2">
              {message ? (
                ""
              ) : (
                <div className="py-14">
                  <img src={folder} className="w-40 mx-auto" alt="" />
                  <h2 className="text-center font-bold text-4xl mb-2">
                    No Services
                  </h2>
                  <p className="text-xl md:text-2xl font-medium text-center">
                    You don&apos;t Add any Sevices Yet. Please Add some Service
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

export default ManageServices;
