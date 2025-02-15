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

const DropdownLanguageSelector = () => {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu onOpenChange={setOpen}>
      <DropdownMenuTrigger className="text-white flex items-center gap-2">
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
