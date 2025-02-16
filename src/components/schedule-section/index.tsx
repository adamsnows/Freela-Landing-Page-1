/* eslint-disable @next/next/no-img-element */
import ConferenceSchedule from "../conference-schedule";
import DropdownLanguageSelector from "../language-selector";

const ScheduleSection = () => {
  return (
    <div className="mt-[142px] bg-background container mx-auto flex flex-col">
      <div className="flex flex-col max-w-[347px] justify-center items-center mx-auto">
        <h1 className="uppercase text-[28px] text-primary text-center">
          Programação
        </h1>
        <img src="/assets/small-rectangle.png" alt="" className="mt-3" />

        <DropdownLanguageSelector variant="ellipse" className="my-10" />
      </div>
      <span className="font-thin text-white text-center mb-[33px]">
        As agendas estão distribuídas por dia, horário e ambientes.
        <br />
        **Alterações de grade referentes aos speakers e horários podem ocorrer
        sem aviso prévio.
      </span>
      <ConferenceSchedule />
    </div>
  );
};

export default ScheduleSection;
