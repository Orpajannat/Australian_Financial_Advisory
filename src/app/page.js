import HeroBanner from "@/components/home/HeroBanner";
import AboutUs from "@/components/home/AboutUs";
import OurImpact from "@/components/home/OurImpact";
import OurServices from "@/components/home/OurServices";
import OurApproach from "@/components/home/OurApproach";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import WhatOurClientSay from "@/components/home/WhatOurClientSay";
import Let from "@/components/home/Let";

export default function Home() {
  return (
    <div>
      <main>
        <HeroBanner/>
        <AboutUs/>
        <OurServices/>
        <OurApproach/>
        <WhyChooseUs/>
        <OurImpact/>
        <WhatOurClientSay/>
        <Let/>
      </main>
    </div>
  );
}
