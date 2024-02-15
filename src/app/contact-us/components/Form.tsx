"use client";
import React, { useEffect, useState } from "react";

interface ContactFormProps {
  formTitle: string;
  type: string;
}

const ContactForm = ({ formTitle, type }: ContactFormProps) => {
  const [input, setInput] = useState({
    name: "",
    phone: "",
    email: "",
    category: "",
    company: "",
    message: "",
  });
  const onChangeHandler = (e: any) => {
    const { name, value } = e.target;

    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2
        className={`text-[22px] uppercase font-bold  border-b-2 border-black mr-6 ${
          type === "help" ? "" : " text-center"
        }`}
      >
        {formTitle || "Enquiry Form"}
      </h2>
      <form onSubmit={handleSubmit} className="w-full pt-5">
        <div className="flex flex-wrap -mx-3">
          <div className="w-full md:w-1/2 px-3 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Name
              <span className="text-red-500">*</span>
            </label>
            <input
              name="name"
              value={input.name}
              className="appearance-none block w-full  text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
              onChange={onChangeHandler}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Phone number
            </label>
            <input
              name="phone"
              value={input.phone}
              className="appearance-none block w-full  text-gray-700 border border-black rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="phone"
              placeholder="0123 4567 89"
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Email
              <span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              value={input.email}
              className="appearance-none block w-full  text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="email"
              placeholder="example@gmail.com"
              onChange={onChangeHandler}
            />
          </div>
        </div>

        <div className="w-full  md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-zip"
          >
            Your Message
            <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            value={input.message}
            rows={4}
            className="appearance-none block w-full  text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            onChange={onChangeHandler}
          />
        </div>
        <div className={`md:flex md:items-center justify-end `}>
          <button
            className={`${
              type === "help" ? "w-full" : ""
            } shadow   bg-[#0f1235] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded`}
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
