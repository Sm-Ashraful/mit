import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LogisticSupport() {
  return (
    <div className="py-4 sm:py-10">
      <h3 className="text-3xl mb-5 capitalize font-bold grid place-content-center text-center text-black/80">
        <span>From Inbound Logistics Through Last Mile Delivery</span>
      </h3>
      <p className="text-black text-center text-sm sm:text-xl font-semibold">
        MIT distribution services connect and optimize our partners’ supply
        chains from inbound to manufacturing through last mile customer delivery
        and returns.
      </p>
      <Image
        src={"/static/integrated-solutions-2.png"}
        width={1600}
        height={900}
        alt="blabla"
        className="my-5"
      />
      <p className="text-black text-center text-sm sm:text-xl font-semibold">
        Efficiencies gained from deploying our integrated solutions include
        improved visibility, appointment optimization, accurate KPI tracking,
        streamlined receiving, streamlined payments, reduced detention, improved
        product safety and control, and much more.
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
    </div>
  );
}
