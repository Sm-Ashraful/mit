import Image from "next/image";
import React from "react";

export default function WhyUs() {
  return (
    <div className="relative sm:grid grid-cols-8 bg-primary mt-14 py-10">
      <div className="absolute opacity-5 sm:opacity-100 sm:relative sm:col-span-3 px-2 sm:px-8">
        <Image src="/static/1.png" alt="why use" width={400} height={400} />
      </div>
      <div className="col-span-5 text-white px-2 sm:px-8 ">
        <h3 className="text-3xl font-bold pb-3 ">Why MIT Distribution?</h3>
        <p className="pb-5">
          We combine best-in-class people, processes, and technology to deliver
          maximum total value.
        </p>
        <p className="pb-5">
          <strong>Reduce Costs:</strong> Our performance-based business model,
          integrated service offering, and culture of continuous improvement all
          work to drive efficiency while minimizing total logistics costs.
        </p>
        <p className="pb-5">
          <strong>Add Unique Value:</strong> On-demand, specialized solutions
          and a partner-centered support structure ensure flexibility and
          optimization, while billions of high-quality, supply chain data points
          enable superior benchmarking.
        </p>
        <p>
          <strong>Mitigate Risk:</strong> Industry-leading technology and expert
          management of administrative and regulatory obligations increase speed
          to market, limit disruptions, and enable our partners to focus on
          their core competencies.
        </p>
      </div>
    </div>
  );
}
