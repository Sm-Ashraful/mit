import Skeleton from "@/components/common/Skeletorn";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ManagementAndExecution() {
  return (
    <Skeleton className="mt-10">
      <h3 className="text-center font-bold text-lg sm:text-3xl pb-3 text-[#494949]">
        Supply Chain Management & Logistics Execution
      </h3>
      <p className="text-center text-[.8em] sm:text-sm">
        From inbound logistics through last mile delivery and returns, our
        integrated logistics services optimize supply chain performance for our
        partners by reducing costs, adding unique value, and mitigating risk. We
        offer a full suite of warehousing and fulfillment solutions that enable
        our manufacturing and distribution partners to outsource supply chain
        activities and create efficiencies. Through our freight management and
        last mile divisions, we provide a wide range of reliable, high-touch
        transportation capacity services. Learn more about our capabilities
        below.
      </p>
      <div className="mt-10 flex items-center justify-center gap-3">
        <div className="relative max-w-[30%] flex flex-col justify-center items-center">
          <Image
            src="/static/icon_warehouse_and_fulfillment.png"
            alt="warehouse and fulfillment"
            width={80}
            height={30}
          />
          <h5 className="text-sm sm:text-lg font-semibold text-center pt-3">
            WAREHOUSING & FULFILLMENT
          </h5>
          <p className="text-[.8em] sm:text-base text-center">
            North America’s leading warehouse labor management service provider.
          </p>
          <Link
            href="/"
            className="underline text-[.6em] sm:text-sm mt-5 text-secondary"
          >
            Get Operational Support
          </Link>
        </div>

        <div className="relative max-w-[30%] flex flex-col justify-center items-center">
          <Image
            src="/static/icon_freight_management.png"
            alt="warehouse and fulfillment"
            width={80}
            height={30}
          />
          <h5 className="text-sm sm:text-lg  font-semibold text-center pt-3">
            FREIGHT MANAGEMENT
          </h5>
          <p className="text-[.8em] sm:text-base text-center">
            Capacity solutions from carrier sourcing to RFP hosting to managed
            transportation.
          </p>
          <Link
            href="/"
            className="underline text-[.6em] sm:text-sm mt-5 text-secondary"
          >
            Optimize Transportation
          </Link>
        </div>
        <div className="relative max-w-[30%] flex flex-col justify-center items-center">
          <Image
            src="/static/icon_last_mile_delivery.png"
            alt="warehouse and fulfillment"
            width={80}
            height={30}
          />
          <h5 className="text-sm sm:text-lg  font-semibold text-center pt-3">
            LAST MILE DELIVERY
          </h5>
          <p className="text-[.8em] sm:text-base text-center">
            Brand protection from purchase to consumer delivery.
          </p>
          <Link
            href="/"
            className="underline text-[.6em] sm:text-sm mt-5 text-secondary"
          >
            Elevate the Last Mile
          </Link>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <button className="mt-5 px-8 py-2 rounded-full bg-secondary font-semibold">
          View More End to End Solution
        </button>
      </div>
    </Skeleton>
  );
}
