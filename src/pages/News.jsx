import React from "react";
import { FaPlus } from "react-icons/fa6";
import Image1 from '../assets/pic1.jpg';

const News = () => {
  const users = [
    {
      id: 1,
      image: Image1,
    },
   
  ];

  return (
    <>
      <div className="sm:pl-72 p-20">
        <p className="font-bold text-2xl">News</p>
        <div className="flex justify-between">
          <p className="text-[18px]">
            You can sell all candidates details here
          </p>
          <button className="bg-blue-700 px-3 py-1 text-white rounded-md flex">
            Add News
            <FaPlus className="m-1 ml-2" />
          </button>
        </div>
        <div className="user-list mt-5">
          {users.map((user) => (
            <NewsCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </>
  );
};

const NewsCard = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.image} alt={`News ${user.id}`} className="user-image" />
    </div>
  );
};

export default News;
