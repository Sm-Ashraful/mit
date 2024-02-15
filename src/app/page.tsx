import HeroSection from "@/components/Layout/Home/HeroSection";
import ManagementAndExecution from "@/components/Layout/Home/ManagementAndExecution";
import Network from "@/components/Layout/Home/Network";
import WhyUs from "@/components/Layout/Home/WhyUs";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ManagementAndExecution />
      <WhyUs />
      <Network />
    </main>
  );
}
