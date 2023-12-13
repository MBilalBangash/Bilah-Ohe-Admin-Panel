import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";

import {
  MdCheckBoxOutlineBlank,
  MdVisibility,
  MdVisibilityOff,
} from "react-icons/md";

const Candidate = () => {
  const data = [
    {
      id: 1,
      idCard: "1234567891235",
      password: "123456",
    },
    {
      id: 2,
      idCard: "9876543219823",
      password: "123456",
    },
    {
      id: 3,
      idCard: "9876543219854",
      password: "123456",
    },
    {
      id: 4,
      idCard: "9876543219834",
      password: "123456",
    },
    {
      id: 6,
      idCard: "98765432198343",
      password: "123456",
    },
  ];

  const [selectedRows, setSelectedRows] = useState([]);
  const [showPasswords, setShowPasswords] = useState(false);

  const toggleRowSelection = (id) => {
    setSelectedRows((prevSelectedRows) => {
      if (prevSelectedRows.includes(id)) {
        return prevSelectedRows.filter((rowId) => rowId !== id);
      } else {
        return [...prevSelectedRows, id];
      }
    });
  };
  const togglePasswordVisibility = () => {
    setShowPasswords((prevShowPasswords) => !prevShowPasswords);
  };

  // Function to render password column
  const renderPassword = (row) => {
    if (selectedRows.includes(row.id) || showPasswords) {
      return row.password;
    } else {
      return "**".repeat(row.password.length);
    }
  };

  return (
    <>
      <div className="sm:pl-72 p-20">
        <p className=" font-bold text-2xl">Candidate</p>
        <p className=" text-[18px]">
          You can sell all applications details here
        </p>
        <div className=" flex justify-between flex-col sm:flex-row ">
          <div className=" flex gap-5">
            <button className=" bg-gray-200 px-3 py-2 flex">
              <MdDeleteForever className=" m-1 text-red-700" />
              Delete
            </button>

            <button className=" bg-gray-200 px-3 py-2 flex">
              <FaArrowDown className=" m-1 text-blue-700" />
              Download
            </button>
          </div>

          <input
            className=" bg-gray-300  h-[40px] pl-8 rounded-md"
            type="text"
            name="name"
            placeholder="Search by id" 
            id=""
          />
        </div>
        <button className=" bg-blue-700 px-3 py-1 mt-3 text-white rounded-md flex">
          Add Candidate
          <IoMdPersonAdd className=" m-1 ml-2" />
        </button>

        <table className="border-collapse w-full mt-5">
          <thead className=" bg-gray-500 text-white">
            <tr>
              <th className="border py-2 px-4">
                <MdCheckBoxOutlineBlank className=" text-[18px]" />
              </th>
              <th className="border py-2 px-4">id Card</th>
              <th className="border py-2 px-4">Password</th>
              <th className="border py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td className="border py-2 px-4">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(row.id)}
                    onChange={() => toggleRowSelection(row.id)}
                  />
                </td>
                <td className="border py-2 px-4">{row.idCard}</td>
                <div className="flex">
                  {renderPassword(row)}
                  <div
                    className="cursor-pointer ml-5 text-lg"
                    onClick={togglePasswordVisibility}
                  >
                    {showPasswords ? <MdVisibility /> : <MdVisibilityOff />}
                  </div>
                </div>
                <td className="border py-2 px-4">
                  <button>
                    <BsThreeDotsVertical />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Candidate;
