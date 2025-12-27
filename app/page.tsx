import Hero from "@/components/home/hero";
import About from "@/components/home/about";
import Sponsors from "@/components/home/sponsors";
import GetInvolved from "@/components/home/get-involved";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Asian Coalition of Tallahassee",
  description: "Asian Coalition of Tallahassee website",
}

export default function Home() {

  return (
    <main>
      <Hero />
      <GetInvolved />
      <About />
      <Sponsors />
    </main>
  );
}
