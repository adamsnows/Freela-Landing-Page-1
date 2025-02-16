"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { useState } from "react";
import Image from "next/image";

const DropdownLanguageSelector = ({
  variant,
  className,
}: {
  variant?: string;
  className?: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu onOpenChange={setOpen}>
      <DropdownMenuTrigger
        className={`text-white flex items-center justify-center gap-2 font-rubik ${className} ${
          variant == "ellipse" &&
          "w-[250px] h-[50px] rounded-full border text-[12px]"
        }`}
      >
        {variant == "ellipse" && (
          <span className="uppercase text-base  me-3">Selecione o idioma</span>
        )}
        <Image
          src="/assets/brazil-icon.png"
          width={15}
          height={15}
          quality={100}
          alt="Brazilian Icon"
          layout="fixed"
        />
        PT
        {open ? <FaAngleUp /> : <FaAngleDown />}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
          <Image
            src="/assets/usa-icon.png"
            width={15}
            height={15}
            quality={100}
            alt="USA Icon"
            layout="fixed"
          />
          ENGLISH
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
          <Image
            src="/assets/spain-icon.png"
            width={15}
            height={15}
            quality={100}
            alt="Spain Icon"
            layout="fixed"
          />
          ESPAÑOL
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownLanguageSelector;
