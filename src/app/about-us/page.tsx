import Breadcrumbs from "@/components/common/Breadcrumbs";
import HeroSection from "@/components/common/HeroSection";
import Skeleton from "@/components/common/Skeletorn";
import Image from "next/image";
import React from "react";

export default function AboutUs() {
  return (
    <div className="relative  w-full bg-white  mx-auto">
      <div className="w-full bg-black/70 py-2">
        <Breadcrumbs />
      </div>
      <HeroSection
        bgImage="url(/static/banner_hero_about_us.jpg)"
        title="Service & Value Through Innovation"
        subTitle="Our integrated solutions employ best-in-class people, processes, and technology to deliver maximum total value to our partners."
      />
      <Skeleton className="py-10">
        <div>
          <h3 className="text-3xl mb-5 capitalize font-bold grid place-content-center text-center text-black/80">
            <span>A Leading Supply Chain Solutions Company</span>
          </h3>
          <p className="text-black text-center text-sm sm:text-xl font-semibold">
            MIT Distribution is a North American supply chain solutions partner
            with more than 600 operating locations, 20,000 associates, and
            60,000 carriers. We have capabilities in freight management,
            warehouse and distribution center support, last-mile delivery,
            supply chain analytics, and optimization, and more. Our integrated,
            end-to-end logistics solutions uniquely position us to help partners
            reduce warehousing and transportation costs.s
          </p>
        </div>
        <div className="my-10 grid sm:grid-cols-2 gap-5">
          <div className="space-y-5 leading-8">
            <p className="">
              We have over 20 years of experience providing expert financial
              advice for both businesses and individuals. Pellentesque faucibus
              dapibus dapibus. Morbi aliquam aliquet neque. Donec placerat
              dapibus sollicitudin.
            </p>
            <p>
              Morbi arcu nisi, mattis ut ullamcorper in, dapibus ac nunc. Cras
              bibendum mauris et sapien feugiat, scelerisque accumsan nibh
              gravida. Quisque aliquet justo elementum lectus ultrices bibendum.
              Pellentesque faucibus dapibus dapibus. Morbi aliquam aliquet
              neque. Donec placerat dapibus sollicitudin. Morbi arcu nisi,
              mattis ut ullamcorper in, dapibus ac nunc. Cras bibendum mauris et
              sapien feugiat, scelerisque accumsan nibh gravida. Quisque aliquet
              justo elementum lectus ultrices bibendum. Suspendisse aliquam nisi
              vitae diam molestie pellentesque. Proin consequat nibh ipsum, in
              dignissim tortor finibus vitae. Nunc ut feugiat nisi. Morbi arcu
              nisi, mattis ut ullamcorper in, dapibus ac nunc. Donec placerat
              dapibus sollicitudin. Morbi arcu nisi.
            </p>
          </div>
          <div className="">
            <Image
              src="/static/aboutus_broker_b.webp"
              alt="about bonsf"
              width="800"
              height="800"
            />
          </div>
        </div>
      </Skeleton>
      <hr />
      <Skeleton className="pt-5">
        <h3 className="text-3xl mb-5 capitalize font-bold grid place-content-center text-center text-black/80">
          <span>Our Expert Team</span>
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 ">
          <div className="flex flex-col justify-center items-center">
            <Image
              src={`/static/broker_profile01.webp`}
              alt="broker 1"
              width={200}
              height={200}
            />
            <p className="pt-5 font-semibold">Jhon Doe</p>
            <p className="pt-1 text-sm font-semibold">CEO and Board Member</p>
            <p className="pt-3 text-sm">
              Donec a felis sed ligula aliquet sollicitudin a in elit. Nunc at
              commodo erat, fringilla egestas tortor.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              src={`/static/broker_profile01.webp`}
              alt="broker 1"
              width={200}
              height={200}
            />
            <p className="pt-5 font-semibold">Jhon Doe</p>
            <p className="pt-1 text-sm font-semibold">CEO and Board Member</p>
            <p className="pt-3 text-sm">
              Donec a felis sed ligula aliquet sollicitudin a in elit. Nunc at
              commodo erat, fringilla egestas tortor.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              src={`/static/broker_profile01.webp`}
              alt="broker 1"
              width={200}
              height={200}
            />
            <p className="pt-5 font-semibold">Jhon Doe</p>
            <p className="pt-1 text-sm font-semibold">CEO and Board Member</p>
            <p className="pt-3 text-sm">
              Donec a felis sed ligula aliquet sollicitudin a in elit. Nunc at
              commodo erat, fringilla egestas tortor.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              src={`/static/broker_profile01.webp`}
              alt="broker 1"
              width={200}
              height={200}
            />
            <p className="pt-5 font-semibold">Jhon Doe</p>
            <p className="pt-1 text-sm font-semibold">CEO and Board Member</p>
            <p className="pt-3 text-sm">
              Donec a felis sed ligula aliquet sollicitudin a in elit. Nunc at
              commodo erat, fringilla egestas tortor.
            </p>
          </div>
        </div>
      </Skeleton>
    </div>
  );
}
