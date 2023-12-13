import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { MdDashboard } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { MdPersonAddAlt } from "react-icons/md";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Layout } from "antd";
import { Spin } from "antd";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <div className="sm:pl-72 flex items-center justify-center flex-wrap  h-screen">
        <div className="flex  flex-col flex-1 overflow-x-hidden overflow-y-auto">
          <div className="flex   flex-col sm:flex-row justify-between p-10 gap-4">
            <div className="w-full border-t-8 border-indigo-800 rounded-lg p-4 shadow-md flex flex-col items-center justify-center">
              <MdOutlineSupervisorAccount className="text-[120px]" />
              <p className="text-center font-semibold text-[18px] text-gray-700 mt-5">
                Total Admins 
              </p>
              <p className="text-center mt-5 text-[30px] font-semibold">7</p> 
            </div>
            <div className="w-full border-t-8 border-indigo-800 rounded-lg p-4 shadow-md flex flex-col items-center justify-center">
              <IoNewspaperOutline className="text-[120px]" />
              <p className="text-center font-semibold text-[18px] text-gray-700 mt-5">
                Total Forms
              </p>
              <p className="text-center mt-5 text-[30px] font-semibold">14</p>
            </div>
            <div className="w-full border-t-8 border-indigo-800 rounded-lg p-4 shadow-md flex flex-col items-center justify-center">
              <MdPersonAddAlt className="text-[120px]" />
              <p className="text-center font-semibold text-[18px] text-gray-700 mt-5">
                Total Candidate
              </p>
              <p className="text-center mt-5 text-[30px] font-semibold">2</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
