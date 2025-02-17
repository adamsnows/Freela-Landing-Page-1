"use client";
import SpeakerCard, { Person } from "../card/speaker-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SpeakerSlider = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const people: Person[] = [
    { image: "/assets/man.png", name: "Eduardo Leme Alves Da Motta" },
    { image: "/assets/man.png", name: "Eduardo Leme Alves Da Motta" },
    { image: "/assets/man.png", name: "Eduardo Leme Alves Da Motta" },
    { image: "/assets/man.png", name: "Eduardo Leme Alves Da Motta" },
    { image: "/assets/man.png", name: "Eduardo Leme Alves Da Motta" },
  ];

  return (
    <>
      <div className="w-full max-w-[1090px] relative container mx-auto">
        <Swiper
          grabCursor={true}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 10000 }}
          onSlideChange={() => setProgress(0)}
        >
          <SwiperSlide>
            <>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[15px] mx-auto mb-[140px] ">
                {people.map((person, index) => (
                  <SpeakerCard
                    key={index}
                    image={person.image}
                    name={person.name}
                  />
                ))}
              </div>
              <div className="w-full flex justify-center">
                <Button className="mx-auto rounded-none w-[204px] h-[45px] text-base font-rubik font-medium -mt-[112px]">
                  VER AGENDA
                </Button>
              </div>
            </>
          </SwiperSlide>
          <SwiperSlide>
            <>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[15px] mx-auto mb-[140px] ">
                {people.map((person, index) => (
                  <SpeakerCard
                    key={index}
                    image={person.image}
                    name={person.name}
                  />
                ))}
              </div>
              <div className="w-full flex justify-center">
                <Button className="mx-auto rounded-none w-[204px] h-[45px] text-base font-rubik font-medium -mt-[112px]">
                  VER AGENDA
                </Button>
              </div>
            </>
          </SwiperSlide>
          <SwiperSlide>
            <>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[15px] mx-auto mb-[140px] ">
                {people.map((person, index) => (
                  <SpeakerCard
                    key={index}
                    image={person.image}
                    name={person.name}
                  />
                ))}
              </div>
              <div className="w-full flex justify-center">
                <Button className="mx-auto rounded-none w-[204px] h-[45px] text-base font-rubik font-medium -mt-[112px]">
                  VER AGENDA
                </Button>
              </div>
            </>
          </SwiperSlide>
          <SwiperSlide>
            <>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[15px] mx-auto mb-[140px] ">
                {people.map((person, index) => (
                  <SpeakerCard
                    key={index}
                    image={person.image}
                    name={person.name}
                  />
                ))}
              </div>
              <div className="w-full flex justify-center">
                <Button className="mx-auto rounded-none w-[204px] h-[45px] text-base font-rubik font-medium -mt-[112px]">
                  VER AGENDA
                </Button>
              </div>
            </>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className=" left-0 w-full h-[0.5px] bg-gray-200 mt-8">
        <div
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </>
  );
};

export default SpeakerSlider;
