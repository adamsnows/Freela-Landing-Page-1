"use client";

import { useState } from "react";

type RoomType = "principal" | "laboratorio";

interface Event {
  day?: string;
  time: string;
  title: string;
  speaker: string;
  description: string;
}

type ScheduleData = Record<string, Record<RoomType, Event[]>>;

const scheduleData: ScheduleData = {
  "04-10-2025": {
    principal: [
      {
        day: "04-10-2025",
        time: "10:00",
        title: "Abertura",
        speaker: "Pedro Junqueira",
        description: "Abertura do evento",
      },
      {
        day: "04-10-2025",
        time: "11:00",
        title: "AULA 01",
        speaker: "Gustavo Santana & Dia Nam Sekkar",
        description: "Abertura do evento",
      },
    ],
    laboratorio: [],
  },
  "04-11-2025": {
    principal: [
      {
        day: "04-11-2025",
        time: "10:00",
        title: "Marketing Digital",
        speaker: "Gustavo Santana & Dia Nam Sekkar",
        description: "Abertura do evento",
      },
    ],
    laboratorio: [
      {
        day: "04-11-2025",
        time: "09:00",
        title: "Expansão do conhecimento",
        speaker: "Francesca Duncan",
        description: "Abertura do evento",
      },
    ],
  },
  "04-12-2025": {
    principal: [
      {
        day: "04-12-2025",
        time: "10:00",
        title: "Marketing Digital",
        speaker: "Gustavo Santana & Dia Nam Sekkar",
        description: "Abertura do evento",
      },
    ],
    laboratorio: [
      {
        day: "04-12-2025",
        time: "09:00",
        title: "Expansão do conhecimento",
        speaker: "Francesca Duncan",
        description: "Abertura do evento",
      },
    ],
  },
};

const formatDate = (dateString: string, shortFormat: boolean = false) => {
  const [month, day, year] = dateString.split("-").map(Number);
  const date = new Date(year, month - 1, day);

  if (shortFormat) {
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
    });
  }

  return date
    .toLocaleDateString("pt-BR", {
      weekday: "short",
      day: "numeric",
      month: "long",
    })
    .replace(",", " •")
    .toUpperCase();
};

const ConferenceSchedule = () => {
  const [selectedDay, setSelectedDay] = useState<string>("04-10-2025");
  const [selectedRoom, setSelectedRoom] = useState<RoomType>("principal");

  return (
    <div className="max-w-5xl mx-auto p-4 text-white rounded-xl">
      <div className="flex justify-center gap-4">
        {Object.keys(scheduleData).map((date) => (
          <div key={date} className="w-[312px] h-[72px] rounded-full ">
            {selectedDay === date ? (
              <button
                className="w-full h-full rounded-full bg-gradient-to-r from-[#B04EE1] to-[#01AFD9] text-white"
                onClick={() => setSelectedDay(date)}
              >
                {formatDate(date)}
              </button>
            ) : (
              <button
                type="button"
                className=" group flex w-[312px] h-[72px] items-center justify-center rounded-full bg-gradient-to-r from-[#B04EE1] to-[#01AFD9] p-[2px] text-white transition-all duration-300 hover:bg-gradient-to-l"
                onClick={() => setSelectedDay(date)}
              >
                <div className="flex h-full w-full items-center justify-center rounded-full bg-background group-hover:bg-gradient-to-r group-hover:from-[#B04EE1] group-hover:to-[#01AFD9] group-hover:transition group-hover:duration-300 group-hover:ease-in-out">
                  {formatDate(date)}
                </div>
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-b from-[#57CBE6]/15 to-[#100D9D]/10 rounded-lg p-4 mt-4">
        <div className="mt-6 flex justify-center gap-4">
          {(["principal", "laboratorio"] as RoomType[]).map((room) => {
            const isLaboratorioEmpty =
              room === "laboratorio" &&
              scheduleData[selectedDay]?.laboratorio?.length === 0;

            return (
              !isLaboratorioEmpty && (
                <button
                  key={room}
                  className={`w-full h-[100px] rounded-md text-white text-[22px] font-rubik font-medium  ${
                    selectedRoom === room
                      ? "bg-gradient-to-r from-[#B04EE1] to-[#01AFD9]"
                      : ""
                  }`}
                  onClick={() => setSelectedRoom(room)}
                >
                  <div className="flex flex-col gap-2 items-center justify-center bg-gradient-to-r from-[#B04EE1]/50 to-[#01AFD9]/50 h-full rounded-lg p-[1px]">
                    <span className="uppercase">
                      {room === "principal"
                        ? "Sala Principal"
                        : "Sala Laboratório"}
                    </span>
                    <span className="text-base font-lato font-thin">
                      Clique aqui para ver a Programação da{" "}
                      {room === "principal"
                        ? "Sala Principal"
                        : "Sala Laboratório"}
                    </span>
                  </div>
                </button>
              )
            );
          })}
        </div>
        <div className="mt-6">
          {scheduleData[selectedDay] ? (
            scheduleData[selectedDay][selectedRoom]?.map((event, index) => (
              <div
                key={index}
                className="mt-4 h-[150px] flex items-center justify-center bg-white/5"
              >
                <div className="text-lg font-bold flex flex-col gap-1 font-rubik w-[132px] me-20">
                  <span className="font-thin text-[16px]">
                    {event.day && formatDate(event.day, true)}
                  </span>
                  <span className="uppercase font-medium text-[20px]">
                    {event.title}
                  </span>
                </div>
                <div className="flex flex-col justify-center w-[600px] mt-2">
                  <span className="font-rubik font-medium text-[16px]">
                    {event.speaker}
                  </span>
                  <span className="font-light">{event.description}</span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400">
              Nenhum evento encontrado.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConferenceSchedule;
