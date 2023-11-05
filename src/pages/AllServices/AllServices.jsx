import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import AllService from "./AllService";

const AllServices = () => {
  const [allData, setAllData] = useState(6);
  const [hide, setHide] = useState(true);
  const [services, setServices] = useState([]);
  const [spin, setspin] = useState(false);
  const [query, setquery] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/services").then((res) => {
      setServices(res.data);
      setspin(true);
      setHide(false);
    });
  }, []);

  const handleMore = () => {
    setAllData(services.length);
    setHide(true);
  };

  const handleSearch = async () => {
    setspin(false);
    const response = await fetch("http://localhost:5000/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });
    if (response.ok) {
      const data = await response.json();
      setServices(data);
      setspin(true);
      setHide(true);
      if (data.length > 6) {
        setAllData(data.length);
      }
    }
  };

  return (
    <div className="container mx-auto px-5 lg:px-0">
      <div className="my-5">
        <div className="w-full lg:w-1/2 mx-auto relative">
          <input
            className="w-full p-3 rounded"
            type="text"
            placeholder="Seach Here ..."
            value={query}
            onChange={(e) => setquery(e.target.value)}
          />
          <button
            className="absolute right-3 top-2/4 -translate-y-1/2"
            onClick={handleSearch}
            id="search-icon"
          >
            <FaSearch></FaSearch>
          </button>
        </div>
      </div>
      {spin ? (
        ""
      ) : (
        <div className=" flex items-center justify-center min-h-screen py-72">
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10 md:mt-14">
        {services.length > 0 ? (
          services
            .slice(0, allData)
            .map((service) => (
              <AllService service={service} key={service._id}></AllService>
            ))
        ) : (
          <div className="col-span-2">
            <h2 className="text-center font-bold text-4xl">No Service Found</h2>
          </div>
        )}
      </div>
      <div className="text-center my-10">
        {hide ? (
          ""
        ) : (
          <button className="btn" onClick={handleMore}>
            More
          </button>
        )}
      </div>
    </div>
  );
};

export default AllServices;
