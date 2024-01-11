"use client";
import React from "react";
import CustomButton from "./CustomButton";

export default function () {
  const handleScroll = () => {};
  return (
    <div className=" w-full  flex justify-center">
      <div>
        <h1 className=" text-4xl text-bold ">
          Find ,Book , Rent A car- fast and quick
        </h1>
        <p className="text-md">Streamline car for your best user experience!</p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-blue-500 text-white p-3  mt-5 rounded-full "
          handleClick={handleScroll}
        />
      </div>
      <div></div>
    </div>
  );
}
