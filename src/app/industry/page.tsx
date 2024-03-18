import Breadcrumbs from "@/components/common/Breadcrumbs";
import HeroSection from "@/components/common/HeroSection";
import Image from "next/image";
import React from "react";

export default function Industries() {
  return (
    <div className="relative  w-full bg-white  mx-auto">
      <div className="w-full bg-black/70 py-2">
        <Breadcrumbs />
      </div>
      <HeroSection
        bgImage="url(/static/banner_industries.jpg)"
        title="Industry Expertise"
        subTitle="Capstone has earned the trust of a diverse group of partners, ranging from Fortune 100 companies to small manufacturing operations and distribution networks. We solve the industry's most challenging problems through strategic planning, scalable technology, collaborative relationships, and highly productive teams that deliver measured results."
      />
      <div className="grid grid-cols-2 sm:grid-cols-3">
        <div>
          <Image
            src="/static/retail.jpg"
            alt="blablabal"
            height={80}
            width={80}
          />
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
