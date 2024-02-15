import React from "react";
import ContactModal from "./partials/ContactModal";
import Image from "next/image";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function Header() {
  return (
    <div>
      <div className="flex justify-between items-center py-2">
        <ContactModal />
        <div className="flex gap-2">
          <button className="bg-primary text-sm text-white font-semibold py-2 px-6">
            Partner Login
          </button>
          <button className="bg-primary text-sm text-white font-semibold py-2 px-6">
            Associate Login
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <Link href="/" className="flex">
          <Image src="/static/mit.png" alt="mit logo" width={80} height={30} />
          <div>
            <p className="font-black tracking-widest text-2xl">MIT</p>
            <p className="font-semibold text-sm">Distribution</p>
          </div>
        </Link>
        <div className="flex-1 ">
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" href={"/"}>
                Solutions
                <ArrowDropDownIcon />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={"/"}>
                Industries
                <ArrowDropDownIcon />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={"/"}>
                About Us
                <ArrowDropDownIcon />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={"/"}>
                Resources
                <ArrowDropDownIcon />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={"/"}>
                Work for Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={"/"}>
                Become a Carrier
                <ArrowDropDownIcon />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
