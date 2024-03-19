import Skeleton from "@/components/common/Skeletorn";
import Image from "next/image";
import React from "react";

export default function Proposition() {
  return (
    <Skeleton className="py-4 sm:py-10">
      <h3 className="text-3xl mb-5 capitalize font-bold grid place-content-center text-center text-black/80">
        <span>Our Value Proposition</span>
      </h3>
      <p className="text-black text-center text-sm sm:text-xl font-semibold">
        We reduce costs, add unique value, and mitigate risks by deeply
        understanding our partners’ needs and pain points and building creative
        solutions to their most complex logistical challenges.
      </p>
      <Image
        src={"/static/proposition.png"}
        alt="blabla2"
        width={1700}
        height={900}
        className="mt-5"
      />
    </Skeleton>
  );
}
