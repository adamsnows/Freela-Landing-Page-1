import SpeakerCard, { Person } from "../card";

/* eslint-disable @next/next/no-img-element */
const SpeakersSection = () => {
  const people: Person[] = [
    { image: "/assets/man.png", name: "Eduardo Leme Alves Da Motta" },
    { image: "/assets/man.png", name: "Eduardo Leme Alves Da Motta" },
    { image: "/assets/man.png", name: "Eduardo Leme Alves Da Motta" },
    { image: "/assets/man.png", name: "Eduardo Leme Alves Da Motta" },
    { image: "/assets/man.png", name: "Eduardo Leme Alves Da Motta" },
  ];

  return (
    <div className="h-[1500px] bg-background flex flex-col container mx-auto py-[54px]">
      <div className="flex gap-4 items-center justify-center text-white text-[32px] font-light">
        <img src="/assets/calendar.png" alt="Calendar" />
        <span>
          11 e 12 de Abril de 2024 •{" "}
          <span className="text-primary font-medium">São Paulo/SP</span>
        </span>
      </div>
      <img
        src="/assets/gradient-rectangle.png"
        alt=""
        className="max-w-[720px] mx-auto mt-3 mb-10"
      />
      <div className="w-full  max-w-[900px] h-[505px] bg-white mx-auto z-10" />
      <div className="flex max-w-[1280px] h-[120px] z-0">
        <img
          src="/assets/ellipse-gradient.png
        "
          alt=""
          className="-mt-[280] lg:-ms-[300] xl:-ms-[170] 2xl:-ms-[50] clip-half"
        />
        <img
          src="/assets/ellipse-gradient.png
        "
          alt=""
          className="-mt-[280] clip-half"
        />
      </div>
      <span className="mx-auto font-rubik uppercase text-white font-thin text-4xl mb-[70px]">
        <span className="font-medium text-primary">Speakers</span>{" "}
        Internacionais
      </span>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[15px] mx-auto">
        {people.map((person, index) => (
          <SpeakerCard key={index} image={person.image} name={person.name} />
        ))}
      </div>
    </div>
  );
};

export default SpeakersSection;
