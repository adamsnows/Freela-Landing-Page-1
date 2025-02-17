import { FaArrowRight } from "react-icons/fa6";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const StayInSection = () => {
  return (
    <div className="h-[293px] bg-gradient-to-r from-[#371EBC] via-[#8343C7] to-[#44A9EB] ">
      <div className="grid grid-cols-2 mx-auto container items-center justify-center text-white h-full max-w-[1100px]">
        <div className="font-rubik me-auto flex flex-col justify-center h-full">
          <h1 className="text-[32px]">FIQUE POR DENTRO</h1>
          <span className="font-light mb-[40px]">
            Preencha seus dados e receba mais informações sobre o evento.
          </span>
          <span className="flex gap-2 items-center ">
            Cadastre-se na nossa newsletter ao lado <FaArrowRight />
          </span>
        </div>
        <div className="ms-auto w-[452px] flex flex-col gap-2 ">
          <Input
            className="border-white w-full  h-[45px]"
            placeholder="Nome Completo"
          />
          <Input
            className="border-white w-full  h-[45px]"
            placeholder="Endereço de e-mail"
          />
          <Button className="text-background bg-white rounded-none font-rubik text-base h-[45px]">
            INSCREVA-SE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StayInSection;
