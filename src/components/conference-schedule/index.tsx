"use client";

import { RoomType, scheduleData } from "@/data/scheduleData";
import { useState } from "react";
import ReactCountryFlag from "react-country-flag";

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
                onClick={() => {
                  setSelectedDay(date);
                  setSelectedRoom("principal");
                }}
              >
                {formatDate(date)}
              </button>
            ) : (
              <button
                type="button"
                className=" group flex w-[312px] h-[72px] items-center justify-center rounded-full bg-gradient-to-r from-[#B04EE1] to-[#01AFD9] p-[2px] text-white transition-all duration-300 hover:bg-gradient-to-l"
                onClick={() => {
                  setSelectedDay(date);
                  setSelectedRoom("principal");
                }}
              >
                <div className="flex h-full w-full items-center justify-center rounded-full bg-background group-hover:bg-gradient-to-r group-hover:from-[#B04EE1] group-hover:to-[#01AFD9] group-hover:transition group-hover:duration-300 group-hover:ease-in-out">
                  {formatDate(date)}
                </div>
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-b from-[#57CBE6]/15 to-[#100D9D]/10 rounded-lg px-12 py-6 mt-4">
        <div className="flex justify-center gap-4">
          {(["principal", "laboratorio"] as RoomType[]).map((room) => {
            const isLaboratorioEmpty =
              room === "laboratorio" &&
              scheduleData[selectedDay]?.laboratorio?.length === 0;

            return (
              !isLaboratorioEmpty && (
                <button
                  key={room}
                  className={`w-full h-[100px] rounded-md text-white text-[22px] font-rubik font-medium   ${
                    selectedRoom === room
                      ? "bg-gradient-to-r p-[2px] from-[#B04EE1] to-[#01AFD9]"
                      : "p-[2px] to-[#B04EE1]/70 from-[#01AFD9]/70"
                  }`}
                  onClick={() => setSelectedRoom(room)}
                >
                  <div className="flex flex-col gap-2 items-center justify-center bg-gradient-to-r to-[#B04EE1]/70 from-[#01AFD9]/70 h-full rounded-md ">
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
          <div className="bg-white/10 w-full h-[60px] flex items-center justify-center font-rubik text-[20px] font-normal">
            Sessão de Abertura Oficial
          </div>
          {scheduleData[selectedDay] ? (
            scheduleData[selectedDay][selectedRoom]?.map((event, index) => (
              <div
                key={index}
                className="mt-4 h-[150px] flex items-center justify-center bg-white/5"
              >
                <div className="-ms-4 text-lg font-bold flex flex-col gap-1 font-rubik w-[125px]  me-20">
                  <span className="font-thin text-[16px]">
                    {event.day && formatDate(event.day, true)}
                  </span>
                  <span className="uppercase font-medium text-[20px]">
                    {event.title}
                  </span>
                  {event.time && (
                    <span className="font-light font-rubik text-[16px] text-nowrap">
                      {event.time}
                    </span>
                  )}
                </div>
                <div
                  className={`-ms-4 flex flex-col justify-center w-[600px] gap-4 ${
                    !event.speakerDescription && "mt-4"
                  } font-rubik`}
                >
                  {event.other && (
                    <span className="mt-5 font-normal text-[20px]">
                      {event.other}
                    </span>
                  )}
                  <div className="flex flex-col">
                    <span
                      className={`font-medium text-[16px] ${
                        !event.speakerDescription && "-mb-3"
                      }`}
                    >
                      {event.speaker}
                    </span>
                    <span className="font-light text-[16px]">
                      {event.speakerDescription}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span
                      className={`${
                        event.secondLineDescription && "font-medium"
                      } `}
                    >
                      {event.from && (
                        <ReactCountryFlag
                          className="emojiFlag"
                          countryCode="US"
                          style={{
                            fontSize: "2em",
                            lineHeight: "2em",
                          }}
                          aria-label="United States"
                        />
                      )}{" "}
                      <span className={`${event.from && "ms-3"} font-light`}>
                        {event.description}
                      </span>
                    </span>
                    <span className="font-light">
                      {event.secondLineDescription}
                    </span>
                  </div>
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
