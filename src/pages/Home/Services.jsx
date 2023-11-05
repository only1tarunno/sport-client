import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import Service from "./Service";
import { Link } from "react-router-dom";

const Services = () => {
  const {
    isPending,
    isError,
    error,
    data: services,
  } = useQuery({
    querykey: ["services"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/services`);
      return res.json();
    },
  });
  if (isPending) {
    return (
      <div
        role="status"
        className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center"
      >
        <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
          <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
        <div className="w-full">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
  if (isError) {
    return Swal.fire({
      icon: "error",
      title: "Oops",
      text: error.message,
    });
  }
  return (
    <div className="container mx-auto px-5 lg:px-0 my-10 lg:my-16">
      <div>
        <h3 className="text-xl text-[#212121] uppercase font-semibold text-center">
          OUR SERVICES
        </h3>
        <h2 className="font-bold text-[#212121] text-3xl lg:text-5xl my-3 text-center">
          Fitness and Sports Services
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-center text-lg">
          Discover a wide range of fitness and sports services tailored to meet
          your health and wellness goals. Enhance your skills, boost your
          fitness, and improve your overall well-being with our dedicated
          instructors and trainers.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10 md:mt-14">
        {services.slice(0, 4).map((service) => (
          <Service service={service} key={service._id}></Service>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/services">
          <button className="btn">Show All</button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
