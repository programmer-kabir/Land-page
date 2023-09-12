import React from "react";
import image1 from "../../../../public/pexels-michael-block-3225517.jpg";
import image2 from "../../../../public/pexels-michael-block-3225520.jpg";
import image3 from "../../../../public/pexels-michael-block-3225524.jpg";
import image4 from "../../../../public/pexels-taryn-elliott-3889927.jpg";

const RecentWork = () => {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold text-center">Our Recent Works & Cinematic Shots</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-10/12 mx-auto my-12">
        <div className="space-y-5">
          <img className="h-[400px]" src={image1} alt="" />
          <h4 className="text-3xl font-semibold uppercase">Project 1</h4>
          <p className="text-xl text-gray-600">
            Lorem ipsum dolor sit amet cons consectetur adipisicing elit. Utelit
            tellius luctes necari
          </p>
        </div>
        <div className="pt-24 space-y-5">
          <img className="h-[400px]"  src={image2} alt="" />
          <h4 className="text-3xl font-semibold uppercase">Project 1</h4>
          <p className="text-xl text-gray-600">
            Lorem ipsum dolor sit amet cons consectetur adipisicing elit. Utelit
            tellius luctes necari
          </p>
        </div>
        <div className="space-y-5">
          <img className="h-[400px]" src={image3} alt="" />
          <h4 className="text-3xl font-semibold uppercase">Project 1</h4>
          <p className="text-xl text-gray-600">
            Lorem ipsum dolor sit amet cons consectetur adipisicing elit. Utelit
            tellius luctes necari
          </p>
        </div>
        <div className="pt-24 space-y-5">
          <img className="h-[400px]" src={image4} alt="" />
          <h4 className="text-3xl font-semibold uppercase">Project 1</h4>
          <p className="text-xl text-gray-600">
            Lorem ipsum dolor sit amet cons consectetur adipisicing elit. Utelit
            tellius luctes necari
          </p>
        </div>
      </div>
      <button className="text-xl font-bold uppercase bg-cyan-500 px-8 py-3">get started</button>
    </div>
  );
};

export default RecentWork;
