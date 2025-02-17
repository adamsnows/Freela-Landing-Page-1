import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import DropdownLanguageSelector from "../language-selector";

const Header = () => {
  return (
    <div className="container mx-auto flex justify-between h-[70px] uppercase items-center">
      <Image
        src="/assets/logo-white.png"
        alt="Header image"
        width={168.44}
        height={43.02}
        quality={100}
      />

      <div className="flex flex-grow justify-center items-center space-x-2 gap-6 font-thin text-white text-sm ms-20 ">
        <Link href="#" className="hover:text-primary">
          Sobre
        </Link>
        <Link href="#" className="hover:text-primary">
          Speakers
        </Link>
        <Link href="#" className="hover:text-primary">
          Agenda científica
        </Link>
        <Link href="#" className="hover:text-primary">
          Comissão científica
        </Link>
        <Link href="#" className="hover:text-primary">
          Patrocinadores
        </Link>
        <Link href="#" className="hover:text-primary">
          FAQ
        </Link>
      </div>
      <div className="flex gap-4">
        <Button
          variant="terciary"
          className="rounded-none ms-auto text-white font-medium font-rubik uppercase w-[140px] h-[45px] text-base"
        >
          Inscreva-se
        </Button>
        <DropdownLanguageSelector />
      </div>
    </div>
  );
};
export default Header;
