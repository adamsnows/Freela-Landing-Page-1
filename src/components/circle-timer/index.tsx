/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import dayjs from "dayjs";
import { useInterval } from "react-use";

const targetDate = dayjs("2025-04-10T00:00:00");

const CircleCountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = dayjs();
    const diff = targetDate.diff(now, "second");

    return {
      dias: Math.floor(diff / (3600 * 24)),
      horas: Math.floor((diff % (3600 * 24)) / 3600),
      min: Math.floor((diff % 3600) / 60),
      seg: diff % 60,
    };
  }

  useInterval(() => {
    setTimeLeft(calculateTimeLeft());
  }, 1000);

  return (
    <div className="flex items-center justify-center gap-[40px] bg-[#0e0d3d] p-6 rounded-xl bg-background mt-8 relative">
      {Object.entries(timeLeft).map(([unit, value], index) => (
        <div key={unit} className="relative flex flex-col items-center">
          <div className="w-[140px] h-[140px] bg-[#e3e3f7] rounded-full flex items-center justify-center shadow-lg flex-col">
            <span className="text-[40px] font-bold font-rubik text-[#0e0d3d] -mt-4">
              {String(value).padStart(2, "0")}
            </span>
            <span className="text-[20px] font-thin font-rubik text-[#0e0d3d] uppercase -mt-4">
              {unit.toUpperCase()}
            </span>
          </div>

          {index < 3 && (
            <span className="absolute right-[-27px] top-[35%] text-[#0BF0CA] text-2xl">
              •
            </span>
          )}
        </div>
      ))}
      <img src="/assets/blur/yellow-blur.png" alt="" className="absolute" />
    </div>
  );
};

export default CircleCountdownTimer;
