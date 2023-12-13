import React, { useState, useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { applicationData } from "../data/data";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

const Application = () => {
  const data = [
    {
      id: 1,
      name: "Ahmed",
      phoneNumber: "030232372837",
      email: "Ahmed@gmail.com",
      city: "Islamabad",
      program: "master",
      firstYearMarks: 400,
      SecondYearMarks: 500,
    },
    {
      id: 2,
      name: "Numan",
      phoneNumber: "03023455667",
      email: "Numan@gmail.com",
      city: "Peshware",
      program: "Bachlore",
      firstYearMarks: 700,
      SecondYearMarks: 800,
    },
    {
      id: 3,
      name: "Usman",
      phoneNumber: "033334356658",
      email: "Usman@gmail.com",
      city: "Kohat",
      program: "Bachlore",
      firstYearMarks: 300,
      SecondYearMarks: 600,
    },
    {
      id: 4,
      name: "Saeed",
      phoneNumber: "03455552423",
      email: "Saeed@gmail.com",
      city: "Rawalpindi",
      program: "master",
      firstYearMarks: 800,
      SecondYearMarks: 800,
    },
    {
      id: 5,
      name: "Israr",
      phoneNumber: "03455552423",
      email: "Israr@gmail.com",
      city: "Rawalpindi",
      program: "master",
      firstYearMarks: 800,
      SecondYearMarks: 800,
    },
    {
      id: 6,
      name: "Amir",
      phoneNumber: "03455552423",
      email: "Amir@gmail.com",
      city: "Rawalpindi",
      program: "master",
      firstYearMarks: 800,
      SecondYearMarks: 800,
    },
    {
      id: 7,
      name: "Haroon",
      phoneNumber: "03455552423",
      email: "Haroon@gmail.com",
      city: "Rawalpindi",
      program: "master",
      firstYearMarks: 800,
      SecondYearMarks: 800,
    },
  ];

  const [selectedRows, setSelectedRows] = useState([]);

  // Function to toggle selection of a row
  const toggleRowSelection = (id) => {
    setSelectedRows((prevSelectedRows) => {
      if (prevSelectedRows.includes(id)) {
        return prevSelectedRows.filter((rowId) => rowId !== id);
      } else {
        return [...prevSelectedRows, id]; 
      }
    });
  };

  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  console.log("applicationData", applicationData);

 

  return (
    <>
      <div className="sm:pl-72 p-20">
        <p className=" font-bold text-2xl">Applications</p>
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
            className=" bg-gray-300 h-[40px] pl-8 rounded-md"
            type="text"
            name="name"
            placeholder="Search by name"
            id=""
          />
        </div>

      

        <table className="border-collapse w-full mt-5">
          <thead className=" bg-gray-500 text-white">
            <tr>
              <th className="border py-2 px-4">
                <MdCheckBoxOutlineBlank className=" text-[18px]" />
              </th>
              <th className="border py-2 px-4">Name</th>
              <th className="border py-2 px-4">Phone Number</th>
              <th className="border py-2 px-4">Email</th>
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
                <td className="border py-2 px-4">{row.name}</td>
                <td className="border py-2 px-4">{row.phoneNumber}</td>
                <td className="border py-2 px-4">{row.email}</td>
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

export default Application;
