"use client";
import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

export default function () {
  const handleScroll = () => {};

  return (
    <div className="w-full flex flex-col items-center pt-16">
      <div className="self-center ">
        <h1 className="text-4xl font-bold">
          Find, Book, Rent A car - fast and quick
        </h1>
        <p className="text-md">Streamline car for your best user experience!</p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-blue-500 text-white p-3 mt-5 rounded-full"
          handleClick={handleScroll}
        />
      </div>
      <div className="mx-auto mt-5">
        <Image src="/hero.png" alt="hero" width={400} height={400} />
      </div>
    </div>
  );
}
