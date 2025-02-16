import { Button } from "../ui/button";

/* eslint-disable @next/next/no-img-element */
const BirdBanner = () => {
  return (
    <div className="w-full max-w-[1088px] h-[461px] border rounded-2xl mx-auto bg-gradient-to-b to-[#0e5bad] from-[#3e3697]">
      <div className="flex items-center text-white">
        <img src="/assets/bird.png" alt="" />
        <div className="flex flex-col gap-4 font-thin max-w-[450px] ms-2 mt-4">
          <h1 className="text-[28px]">QUANDO?</h1>
          <span>
            O <span className="font-medium">Congresso Huntington</span> acontece
            nos dias{" "}
            <span className="font-medium">11 e 12 de abril de 2025</span>. No
            dia 10, acontece a novidade desta edição: a Business Class “Inovação
            e valor para gestores de saúde”.
          </span>
          <h1 className="text-[28px]">ONDE?</h1>
          <span>
            No Hotel Tivoli Mofarrej, especialistas de vários países trazem os
            avanços, as novidades e o futuro da reprodução assistida.
          </span>
          <Button className="rounded-none max-w-[201px] h-[45px] text-base font-rubik mt-8">
            VEJA COMO CHEGAR
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BirdBanner;
