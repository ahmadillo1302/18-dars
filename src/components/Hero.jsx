import React from "react";
import { ProfilePhoto } from "../assets";

export default function Hero() {
  return (
    <div className="flex justify-around w-full  pt-40 pb-20">
      <div className="text-white px-10 max-w-[600px] gap-5 bg-[#6A1E55] py-14 rounded-lg bg-opacity-50 hover:backdrop-blur-lg">
        <h2 className="font-bold text-2xl">Qobiljonov Ahmadillo</h2>
        <h1 className="text-3xl font-bold py-10">I'm Full Stack Developer</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
          molestias quidem numquam amet rerum. Accusantium sit iste vitae
          inventore, dolore rem temporibus quaerat sunt debitis magni nobis
          consequuntur vel aspernatur.
        </p>
      </div>
      <div>
        <img className="h-72  no-repeat  center / cover" src={ProfilePhoto} alt="profile" />
      </div>
    </div>
  );
}
