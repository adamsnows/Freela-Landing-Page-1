/* eslint-disable @next/next/no-img-element */
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MedicineFutureSection = () => {
  return (
    <div className="bg-background max-w-[1088px] mx-auto h-[590px] w-full mt-10">
      <div className="grid grid-cols-2 container mx-auto text-white">
        <div className="flex flex-col gap-10">
          <span className="font-rubik text-[32px] uppercase max-w-[500px]">
            O futuro da{" "}
            <span className="text-primary">medicina reprodutiva</span> passa por
            aqui
          </span>
          <span className="font-lato font-thin text-[21px] max-w-[510px]">
            Nos dias 11 e 12 de abril de 2025, grandes especialistas do mundo
            todo se reúnem novamente no Hotel Tivoli Mofarrej, em São Paulo,
            para apresentar as últimas novidades em reprodução assistida.
          </span>
          <span className="font-thin text-[21px]">
            Nas últimas <span className="font-normal">5 edições</span> tivemos
            mais de:
          </span>
          <div className="grid grid-cols-2 max-w-[350px] text-[18px]">
            <div className="font-lato font-thin flex gap-4 ">
              <div className="border-s h-full" />
              <div className="">
                <span className="text-2xl font-rubik text-[40px]">50</span>
                <br />
                <span className="text-primary">palestrantes</span>{" "}
                internacionais
              </div>
            </div>
            <div className="font-lato font-thin flex gap-4">
              <div className="border-s h-full" />
              <div className="">
                <span className="text-2xl font-rubik text-[40px]">3.500</span>
                <br />
                <span className="text-primary">participantes</span>
                <br /> inscritos
              </div>
            </div>
          </div>
        </div>
        <div className="relative ms-[90px]">
          <img
            src="/assets/blur/purple-ellipse-gradient.png"
            alt=""
            className="absolute end-0 z-0 -me-[300px] mt-20"
          />
          <Swiper
            grabCursor={true}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              nextEl: ".custom-swiper .custom-button-next",
              prevEl: ".custom-swiper .custom-button-prev",
            }}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            autoplay={{ delay: 10000 }}
            className="custom-swiper"
          >
            <SwiperSlide>
              <img src="/assets/people.png" alt="" className="mx-auto" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/people.png" alt="" className="mx-auto" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/people.png" alt="" className="mx-auto" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/people.png" alt="" className="mx-auto" />
            </SwiperSlide>
          </Swiper>

          <span className="w-full text-center block font-thin mt-2 text-[11px]">
            Imagem do evento realizado em 2023
          </span>
          <div className="flex items-center justify-center w-full absolute left-1/2 -ms-10 mt-2">
            <div className="custom-pagination " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicineFutureSection;
