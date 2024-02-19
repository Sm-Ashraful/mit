import React from "react";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

export default function Career() {
  return (
    <div className="grid sm:grid-cols-2 mt-10 gap-4">
      <div className="px-10 py-5 shadow-xl flex flex-col justify-center items-center">
        <h3 className="text-3xl mb-5 capitalize font-bold grid place-content-center text-center text-[#3F00FF]">
          <span>
            <Diversity2Icon />
          </span>
          <span>Join the MIT team.</span>
        </h3>

        <p className="text-center">
          Want to be part of a growing organization that recognizes and rewards
          hard work? We’re looking for sharp, ambitious candidates to join our
          team. We’ve built a high-energy, positive culture with opportunities
          for mentorship, talent development, upward mobility, and community
          involvement.
        </p>
        <button className="mt-5 px-8 py-2 rounded-full bg-secondary uppercase font-semibold">
          Grow With Us
        </button>
      </div>
      <div className="px-10 py-5 shadow-xl flex flex-col justify-center items-center">
        <h3 className="text-3xl mb-5 capitalize font-bold grid place-content-center text-center text-[#3F00FF]">
          <span>
            <LocalShippingIcon />
          </span>
          <span> Join our carrier network.</span>
        </h3>

        <p className="text-center">
          Our shipping network is extensive, and as a Capstone Carrier Partner,
          you get access to freight opportunities from the largest shippers in
          North America. We pay you quickly, treat you with respect, and match
          you with freight that fits your needs.
        </p>
        <button className="mt-5 px-8 py-2 rounded-full bg-secondary uppercase font-semibold">
          Haul for us
        </button>
      </div>
    </div>
  );
}
