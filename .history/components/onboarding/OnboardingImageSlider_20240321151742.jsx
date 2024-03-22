import React from "react";
import Image from "next/image";
import { Carousel } from "@material-tailwind/react";

import Dashboard from "../../assets/dashboard.png";

function OnboardingImageSlider() {
  return (
    <Carousel className="rounded-xl">
      <Image
        height={400}
        width={800}
        className="ml-8 w-11/12 max-w-lg rounded-lg object-cover"
        src={Dashboard}
      />
      <Image
        height={400}
        width={800}
        className="ml-8 w-11/12 max-w-lg rounded-lg object-cover"
        src={Dashboard}
      />
      <Image
        height={400}
        width={800}
        className="ml-8 w-11/12 max-w-lg rounded-lg object-cover"
        src={Dashboard}
      />
    </Carousel>
  );
}

export default OnboardingImageSlider;
