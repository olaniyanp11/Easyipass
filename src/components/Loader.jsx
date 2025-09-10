"use client";
import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#212073] text-poppins">
      <div className="flex flex-col items-center space-y-6">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>

        {/* Text */}
        <h1 className="text-white font-bold text-2xl md:text-4xl tracking-widest animate-pulse">
          Eazyipass
        </h1>
      </div>
    </div>
  );
};

export default Loader;
