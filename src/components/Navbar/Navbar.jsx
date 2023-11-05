import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { initFlowbite } from "flowbite";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(navigate("/login"))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    initFlowbite();
  }, [user]);
  const menus = (
    <>
      <li className="my-4 lg:my-0">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="my-4 lg:my-0">
        <NavLink to="/services">Services</NavLink>
      </li>

      {user ? (
        <>
          <li>
            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              className="flex items-center justify-between w-full py-2 pr-4 text-gray-900 rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
            >
              Dashboard{" "}
              <svg
                className="w-2.5 h-2.5 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {/* Dropdown menu  */}
            <div
              id="dropdownNavbar"
              className="z-50 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-400"
                aria-labelledby="dropdownLargeButton"
              >
                <li>
                  <NavLink
                    to="/myServices"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    My Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/addServices"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Add Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/mySchedules"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    My Schedules
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <button onClick={handleLogOut} className="btn">
              Logout
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="container px-8 lg:px-0 mx-auto flex flex-wrap items-center justify-between py-4">
        <Link href="#" className="flex items-center">
          <img src={logo} className="h-8 mr-3" alt=" Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            ClubFit
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 items-center rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {menus}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
