import React from "react";
import img from "../../../public/hill.jpg";
const Hero = () => {
  return (
    <div className="mt-40">
      <div className="relative">
        <img className="inset-0 z-10 " src={img} alt="" />
        <div className="absolute inset-0 bg-cyan-400 opacity-50 z-20"></div>
        <div className="absolute bottom-0">
         

          <div className=" md:w-1/2">
            <h5 className="text-cyan-600 text-xl font-semibold uppercase">
              Our expertise
            </h5>
            <h2 className="text-white text-4xl uppercase font-bold pt-5">
              We are professional in the field aerial & drone
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
              totam cum accusamus eum necessitatibus commodi esse nobis.
              Nostrum, quam accusantium. Non veritatis id cupiditate quas!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
