import React from "react";
import { IoPersonAdd } from "react-icons/io5";

const UserCard = ({ user }) => {
  return (
    <div className="flex gap-6 p-1">
      <div>
        <img
          src={user.image}
          alt="Image"
          className="w-8 h-8 rounded-full object-cover"
        />
      </div>
      <div className="flex flex-col">
        <p>{user.name}</p>
        <p>{user.email}</p>
      </div>
    </div>
  );
};

const Admins = () => {
  const users = [
    {
      id: 1,
      name: "Asad",
      email: "asad@example.com",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Sabir",
      email: "sabir@example.com",
      image:
        "https://images.pexels.com/photos/19380770/pexels-photo-19380770/free-photo-of-merchant-in-city.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      name: "Abid",
      email: "abid@example.com",
      image:
        "https://images.pexels.com/photos/2373220/pexels-photo-2373220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      name: "Shafi",
      email: "shafi@example.com",
      image:
        "https://images.pexels.com/photos/1670847/pexels-photo-1670847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      name: "Sami",
      email: "sami@example.com",
      image:
        "https://images.pexels.com/photos/2119289/pexels-photo-2119289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 6,
      name: "Mati",
      email: "mati@example.com",
      image:
        "https://images.pexels.com/photos/2779320/pexels-photo-2779320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1  ",
    },
    {
      id: 7,
      name: "Aslam",
      email: "aslam@example.com",
      image:
        "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <>
      <div className="sm:pl-72 p-20">
        <p className="font-bold text-2xl">Admins</p>

        <div className="flex justify-between">
          <p className="text-[18px]">
            You can sell all candidates' details here
          </p>

          <div className="p-">
            <input
              className="bg-gray-300 h-[40px] pl-8 rounded-md"
              type="text"
              name="name"
              placeholder="Search by name, email"
              id=""
            />
          </div>
        </div>
        <button className=" bg-blue-700 px-3 py-1 mt-3 text-white rounded-md flex">
          Add Admin
          <IoPersonAdd className=" m-1 ml-2" />
        </button>

        <div className="user-list mt-8 ">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Admins;
