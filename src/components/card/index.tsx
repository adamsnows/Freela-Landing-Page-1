/* eslint-disable @next/next/no-img-element */
import React from "react";

export interface Person {
  image: string;
  name: string;
}

const SpeakerCard: React.FC<Person> = ({ image, name }) => {
  return (
    <div className="w-[205px] h-[264px] bg-gradient-to-b from-[#0e5bad] to-[#4723b5] rounded-lg border border-white p-4 flex flex-col font-thin font-rubik mx-auto">
      <div className="relative mt-4">
        <img
          src="/assets/brazil-rectangle.png"
          alt=""
          className="absolute top-0 start-0 -mt-3 rounded"
        />
        <img
          className="w-[173px] h-[149px]  object-cover mb-3"
          src={image}
          alt={name}
        />
      </div>
      <h3 className="text-white  text-start mb-1 text-base">{name}</h3>
      <button className="text-white text-start rounded-full text-base uppercase">
        + Saiba mais
      </button>
    </div>
  );
};

export default SpeakerCard;
