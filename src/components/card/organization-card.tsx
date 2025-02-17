/* eslint-disable @next/next/no-img-element */
import React from "react";

interface CardProps {
  name: string;
  crm: string;
  description: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ name, crm, description, image }) => {
  return (
    <div className="w-[285px] h-[386px] rounded-xl flex flex-col items-center justify-center text-white p-5 border border-[#4A6FA5] mx-auto">
      <img
        src={image}
        alt={name}
        className="w-[132px] h-[132px] rounded-full object-cover"
      />
      <h3 className="mt-4 text-lg text-center font-normal">{name}</h3>
      <p className="text-sm text-center font-light">{crm}</p>
      <div className="border-b w-full border-primary mt-4 max-w-[157px]" />

      <p className="text-[14px] text-center mt-2 max-w-[200px] font-light">
        {description}
      </p>
      <button className="mt-4 underline text-white font-light text-[14px] cursor-pointer">
        VER BIO
      </button>
    </div>
  );
};

export const ComissionCardGrid: React.FC = () => {
  const members: CardProps[] = [
    {
      name: "Mauricio Chehin",
      crm: "CRM/SP 58.345",
      description: "Fundador da Huntington Medicina Reprodutiva",
      image: "/assets/people/mauricio.png",
    },
    {
      name: "Aline Lorenzon",
      crm: "CRM/SP 58.345",
      description: "Fundador da Huntington Medicina Reprodutiva",
      image: "/assets/people/aline.png",
    },
  ];

  return (
    <div className="flex justify-center max-w-[600px] items-center mx-auto">
      {members.map((member, index) => (
        <Card key={index} {...member} />
      ))}
    </div>
  );
};

export const OrganizationCardGrid: React.FC = () => {
  const members: CardProps[] = Array(9).fill({
    name: "Eduardo Leme Alves Da Motta",
    crm: "CRM/SP 58.993",
    description: "Fundador da Huntington Medicina Reprodutiva",
    image: "/assets/people/eduardo.png",
  });

  return (
    <div className="grid grid-cols-3 gap-5 justify-center max-w-[875px] mx-auto">
      {members.map((member, index) => (
        <Card key={index} {...member} />
      ))}
    </div>
  );
};
