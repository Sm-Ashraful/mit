import React from "react";

export default function HeroSection() {
  return (
    <div className="w-full  rounded-sm relative">
      <video src={"./mit.mp4"} autoPlay muted loop className="w-full h-fit" />
      <div className="absolute w-full h-full inset-0 bg-blend-multiply bg-opacity-50 bg-primary">
        <div className="w-full h-full flex flex-col justify-center items-center px-8">
          <p className="text-lg sm:text-4xl font-bold text-white">
            MIT Distribution
          </p>
          <p className="text-white text-center text-sm sm:text-xl font-semibold">
            Partner Focused. Data Driven. Results Oriented.
          </p>
          <button className="mt-5 px-8 py-2 rounded-full bg-secondary">
            Speak With An Expert
          </button>
        </div>
      </div>
      <div className="bg-[#494949] sm:absolute sm:bottom-0 py-5 w-full px-5 text-white flex justify-center gap-3 items-center">
        <p className="border-r border-white sm:px-3 font-semibold text-sm sm:text-lg">
          BY THE NUMBERS
        </p>
        <p className="border-r border-white sm:px-3 font-semibold text-sm sm:text-lg">
          100k+ sites
        </p>
        <p className="border-r border-white sm:px-3 font-semibold text-sm sm:text-lg">
          1k+ Team Members
        </p>
        <p className="border-r border-white sm:px-3 font-semibold text-sm sm:text-lg">
          1M Shipments Managed
        </p>
        <p className="font-semibold text-sm sm:text-lg">5B Annual Cases</p>
      </div>
    </div>
  );
}
