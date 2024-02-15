"use client";
import { useState } from "react";
import ContactForm from "./components/Form";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import PhoneSharpIcon from "@mui/icons-material/PhoneSharp";
import MailSharpIcon from "@mui/icons-material/MailSharp";
import WatchLaterSharpIcon from "@mui/icons-material/WatchLaterSharp";

const Contact = () => {
  return (
    <div className="relative my-10 w-full bg-white max-w-4xl mx-auto">
      <div className="">
        <div className="mt-10 md:mt-0">
          <h2
            className={`uppercase text-[22px] font-bold  border-b-2 border-black `}
          >
            Contact Information
          </h2>
          <p className="text-[#777] pt-3">
            We value your feedback and welcome your thoughts on our customer
            service, merchandise, website, or any other topics you would like to
            share with us. We appreciate any comments and suggestions you may
            have, as they help us improve and provide a better experience for
            our customers. Your input is highly appreciated and will be taken
            into consideration. Thank you for taking the time to provide us with
            your valuable feedback.
          </p>
          <p className="flex gap-3 pt-5 items-center text-[#777]">
            <HomeSharpIcon /> 4301 Pleasantdale Rd, Unit G Doraville, GA 30340
          </p>
          <p className="flex gap-3 pt-5 items-center text-[#777]">
            <PhoneSharpIcon /> +1 931 422 8003
          </p>
          <p className="flex gap-3 pt-5 items-center text-[#777]">
            <MailSharpIcon /> support@mitaliint.com
          </p>
          <p className="flex gap-3 pt-5 items-center text-[#777]">
            <WatchLaterSharpIcon /> 24/7 supports
          </p>
        </div>
        <div className="mt-8 mx-auto">
          <ContactForm formTitle="Contact For Support" type="help" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
