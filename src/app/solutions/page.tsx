import Breadcrumbs from "@/components/common/Breadcrumbs";
import HeroSection from "@/components/common/HeroSection";
import React from "react";
import LogisticSupport from "./partials/LogisticSupport";
import Proposition from "./partials/Proposition";

export default function Solutions() {
  return (
    <div className="relative  w-full bg-white  mx-auto">
      <div className="w-full bg-black/70 py-2">
        <Breadcrumbs />
      </div>
      <HeroSection
        bgImage="url(/static/solutions_banner.jpg)"
        title="End-To-End Supply Chain Management Solutions"
        subTitle="Our innovative warehouse solutions deliver the scale, accountability,
          and continuity required for our diverse manufacturing, retail, and
          distribution partners to effectively compete in an ever-evolving
          environment."
      />
      <LogisticSupport />
      <Proposition />
    </div>
  );
}
