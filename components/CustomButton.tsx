"use client";
import { CustomButtonProps } from "@/types";
import React from "react";

export default function CustomButton({
  title,
  containerStyles,
  handleClick,
}: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`${containerStyles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}
