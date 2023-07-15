import React from "react";

const ServiceCard = ({ item, french }) => {
  return (
    <div className="bg-cardBG rounded-2xl shadow-lg overflow-hidden group p-8">
      <h1 className="text-2xl text-theme font-bold mb-4">
        {french ? item.FTitle : item.title}
      </h1>

      {/* image */}
      <div className="rounded-2xl overflow-hidden">
        <img
          src={item.picture}
          alt={item.title}
          className="w-full h-[280px] object-cover group-hover:brightness-75 duration-200"
        />
      </div>

      {/* card */}
      <div className="py-5">
        <p className="text-base leading-[160%] my-4 text-primaryGray">
          {french ? item.FDesc : item.desc}
        </p>
      </div>

      {/* buttons */}
      <div className="mb-8">
        <button className="text-white bg-theme font-bold text-lg pl-8 py-3 px-8 rounded-lg hover:translate-x-3 duration-300">
          {french ? item.FPrice : item.price}
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
