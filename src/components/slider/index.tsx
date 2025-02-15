/* eslint-disable @next/next/no-img-element */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { useState, useEffect } from "react";

// Import Swiper CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "../ui/button";

const FullWidthSwiper = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#02014d]">
      <div className="w-full relative container mx-auto">
        <Swiper
          grabCursor={true}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          // autoplay={{ delay: 10000 }}
          onSlideChange={() => setProgress(0)}
        >
          <SwiperSlide>
            <div className="relative">
              <img
                className="object-cover z-10  mx-auto"
                src="/assets/slider-1.png"
                alt="Slide 1"
              />
              <div className="hidden flex-col z-20 text-white max-w-[315px] text-end absolute right lg:flex bottom-0 end-0 lg:-mb-5 lg:end-[80px] xl:end-[105px] 2xl:end-[235px] p-4 text-lg">
                <div className="flex flex-col">
                  <span className="font-bold">10 de abril</span>
                  <span className="font-thin">
                    Business Class “Inovação e valor para gestores de saúde”.
                    Saiba mais abaixo.
                  </span>
                </div>
                <Button
                  variant="terciary"
                  className="rounded-none ms-auto text-white font-medium uppercase w-full mt-8 mb-9 h-[45px] text-base"
                >
                  Inscreva-se
                </Button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                className="object-cover z-10  mx-auto"
                src="/assets/slider-1.png"
                alt="Slide 1"
              />
              <div className="hidden flex-col z-20 text-white max-w-[315px] text-end absolute right lg:flex bottom-0 end-0 lg:-mb-5 lg:end-[80px] xl:end-[105px] 2xl:end-[235px] p-4 text-lg">
                <div className="flex flex-col">
                  <span className="font-bold">10 de abril</span>
                  <span className="font-thin">
                    Business Class “Inovação e valor para gestores de saúde”.
                    Saiba mais abaixo.
                  </span>
                </div>
                <Button
                  variant="terciary"
                  className="rounded-none ms-auto text-white font-medium uppercase w-full mt-8 mb-9 h-[45px] text-base"
                >
                  Inscreva-se
                </Button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                className="object-cover z-10  mx-auto"
                src="/assets/slider-1.png"
                alt="Slide 1"
              />
              <div className="hidden flex-col z-20 text-white max-w-[315px] text-end absolute right lg:flex bottom-0 end-0 lg:-mb-5 lg:end-[80px] xl:end-[105px] 2xl:end-[235px] p-4 text-lg">
                <div className="flex flex-col">
                  <span className="font-bold">10 de abril</span>
                  <span className="font-thin">
                    Business Class “Inovação e valor para gestores de saúde”.
                    Saiba mais abaixo.
                  </span>
                </div>
                <Button
                  variant="terciary"
                  className="rounded-none ms-auto text-white font-medium uppercase w-full mt-8 mb-9 h-[45px] text-base"
                >
                  Inscreva-se
                </Button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                className="object-cover z-10  mx-auto"
                src="/assets/slider-1.png"
                alt="Slide 1"
              />
              <div className="hidden flex-col z-20 text-white max-w-[315px] text-end absolute right lg:flex bottom-0 end-0 lg:-mb-5 lg:end-[80px] xl:end-[105px] 2xl:end-[235px] p-4 text-lg">
                <div className="flex flex-col">
                  <span className="font-bold">10 de abril</span>
                  <span className="font-thin">
                    Business Class “Inovação e valor para gestores de saúde”.
                    Saiba mais abaixo.
                  </span>
                </div>
                <Button
                  variant="terciary"
                  className="rounded-none ms-auto text-white font-medium uppercase w-full mt-8 mb-9 h-[45px] text-base"
                >
                  Inscreva-se
                </Button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className=" left-0 w-full h-[0.5px] bg-gray-200">
        <div
          className="h-full bg-background transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default FullWidthSwiper;
