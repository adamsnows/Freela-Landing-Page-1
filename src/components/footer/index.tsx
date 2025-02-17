/* eslint-disable @next/next/no-img-element */

import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="h-[190px] bg-[#040365] grid grid-cols-3 w-full mx-auto items-center justify-between text-white">
      <img
        src="/assets/logo-white.png"
        alt=""
        className="w-[168px] h-[43px] mx-auto cursor-pointer"
      />
      <div className="flex flex-col mx-auto gap-1">
        <span className="cursor-pointer">CONTATO</span>
        <span className="font-light">congresso@huntington.com.br</span>
        <div className="flex gap-4 items-center">
          <span>SIGA-NOS</span>
          <span className="flex gap-2 items-center text-base cursor-pointer font-light">
            <FaInstagram className="text-lg" /> INSTAGRAM
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2 mx-auto text-[16px]">
        <span className="cursor-pointer">REGRAS DE CANCELAMENTO</span>
        <span className="cursor-pointer">POLÍTICA DE PRIVACIDADE</span>
      </div>
    </div>
  );
};

export default Footer;
