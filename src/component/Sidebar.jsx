import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { RxAvatar } from "react-icons/rx";
import { LuMenuSquare } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(
    Cookies.get("isSidebarOpen") === "true" ? true : false
  );

  const [anchorEl, setAnchorEl] = useState(null);
  const modalRef = useRef(null);
  const sideNavRef = useRef(null);

  const toggleSidebar = () => {
    const newIsSidebarOpen = !isSidebarOpen;
    setIsSidebarOpen(newIsSidebarOpen);

    Cookies.set("isSidebarOpen", newIsSidebarOpen.toString());
  };

  const handleUserMenuClick = () => {
    setAnchorEl(!anchorEl);
  };

  const handleUserMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSignout = () => {
    console.log("logout");
  };

  const isDarkMode = false;

  return (
    <div ref={sideNavRef}>
      <nav className={`fixed top-0 z-50 w-full `}>
        <div className="px-3 py-3 lg:px-5 lg:pl-3 flex justify-between items-center">
          <button
            type="button"
            onClick={toggleSidebar}
            className={`sm:hidden group relative flex items-center py-2 pl-2 pr-2 transition-colors duration-200 group px-2 rounded-md text-base font-normal gap-2`}
          >
            <span className="sr-only">Toggle sidebar</span>
            {isSidebarOpen ? (
              <>
                {/* <LuMenuSquare size={20} /> */}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 transform origin-left transition-transform duration-200`}
                ></span>
              </>
            ) : (
              <>
                <LuMenuSquare size={20} />
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 transform origin-left transition-transform duration-200`}
                ></span>
              </>
            )}
          </button>

          <p className="font-semibold xs:text-xs sm:text-base md:text-lg lg:text-xl 2xl:text-2xl">
            Oriental Hope Education
          </p>

          <div className="flex items-center">
            <button
              // title={`${isDarkMode ? "Light" : "Dark"}`}
              className={`group px-2 py-2 relative rounded-md text-base font-normal flex items-center gap-2`}
              //   onClick={() => setIsDarkMode((prevMode) => !prevMode)}
            >
              {/* {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />} */}
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 transform origin-left transition-transform duration-200`}
              ></span>
            </button>
            <div className="relative px-5">
              <RxAvatar size={40} />

              {anchorEl && (
                <div
                  ref={modalRef}
                  className={`absolute -left-2 py-2 w-24 rounded-md shadow-2xl z-50 flex flex-col`}
                >
                  <Link
                    to="/account"
                    className={`px-2 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-black flex gap-1 items-center justify-start`}
                    onClick={handleUserMenuClose}
                  >
                    <LuMenuSquare fontSize="small" />
                    Account
                  </Link>
                  <button
                    onClick={handleSignout}
                    className={`px-2 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-black flex gap-2 items-center justify-start`}
                  >
                    <LuMenuSquare className="w-5 h-5" />
                    Signout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <aside
        className={`z-40 fixed top-0 left-0 w-64 h-screen pt-24 transition-transform ${
          isSidebarOpen ? "" : "-translate-x-full"
        } bg-white sm:translate-x-0 `}
      >
        <div className={`h-full px-3 pb-4 overflow-y-auto`}>
          <ul className="space-y-4 font-medium">
            <li className={`rounded-lg`}>
              <Link
                onClick={toggleSidebar}
                to={"/"}
                className={`flex items-center p-2 group`}
              >
                <MdDashboard size={24} />
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>
            <li className={`rounded-lg`}>
              <Link
                to={"/application"}
                onClick={toggleSidebar}
                className={`flex items-center p-2 group`}
              >
                <LuMenuSquare size={26} />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Application
                </span>
              </Link>
            </li>

            <li className={`rounded-lg`}>
              <Link
                to={"/candidate"}
                onClick={toggleSidebar}
                className={`flex items-center p-2 group`}
              >
                <IoMdPersonAdd size={20} />
                <span className="flex-1 ml-3 whitespace-nowrap">Candidate</span>
              </Link>
            </li>
            <li className={`rounded-lg`}>
              <Link
                to={"/admins"}
                onClick={toggleSidebar}
                className={`flex items-center p-2 group`}
              >
                <MdOutlineSupervisorAccount size={26} />
                <span className="flex-1 ml-3 whitespace-nowrap">Admins</span>
              </Link>
            </li>
            <li className={`rounded-lg`}>
              <Link
                to={"/news"}
                onClick={toggleSidebar}
                className={`flex items-center p-2 group`}
              >
                <IoNewspaperOutline size={20} />
                <span className="flex-1 ml-3 whitespace-nowrap">News</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
