import React from "react";

interface HeroSectionProps {
  bgImage: string;
  title: string;
  subTitle: string;
}

export default function HeroSection({
  bgImage,
  title,
  subTitle,
}: HeroSectionProps) {
  return (
    <div
      className="relative w-full h-[85vh]"
      style={{
        backgroundImage: bgImage,
        backgroundSize: "cover",
        backgroundBlendMode: "hue",
      }}
    >
      <div className="z-10 w-full h-full absolute inset-0 flex flex-col justify-center items-center">
        <p className="text-lg sm:text-4xl font-bold text-white">{title}</p>
        <p className="pt-3 sm:pt-5 text-white text-center text-sm sm:text-xl font-semibold">
          {subTitle}
        </p>
      </div>
      <div className="shadow-overlay"></div>
    </div>
  );
}
