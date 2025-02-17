/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";

const MapContainer = dynamic(
  () => import("react-leaflet").then((m) => m.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((m) => m.TileLayer),
  { ssr: false }
);
const Marker = dynamic(() => import("react-leaflet").then((m) => m.Marker), {
  ssr: false,
});
const Popup = dynamic(() => import("react-leaflet").then((m) => m.Popup), {
  ssr: false,
});

const HowToArriveSection = () => {
  const [L, setL] = useState<any>(null);
  const position: [number, number] = [-23.563194, -46.656639];
  const [customIcon, setCustomIcon] = useState<L.Icon | null>(null);

  useEffect(() => {
    import("leaflet").then((leaflet) => {
      setL(leaflet);

      const icon = new leaflet.Icon({
        iconUrl: "/assets/marker-icon.png",
        iconSize: [27, 44],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
        shadowUrl: "/assets/marker-shadow.png",
        shadowSize: [41, 41],
      });

      setCustomIcon(icon);
    });
  }, []);

  return (
    <div className="h-[2000px] bg-gradient relative">
      <img
        src="/assets/blur/purple-ellipse-gradient.png"
        alt=""
        className="absolute start-[-200px] top-[-50px] h-[500px] w-[500px] opacity-50"
      />
      <img
        src="/assets/blur/purple-ellipse-gradient.png"
        alt=""
        className="absolute end-[-300px] top-[200px]"
      />
      <div className="w-full grid grid-cols-2 items-center container mx-auto text-white mt-[90px] mb-[114px]">
        <div className="flex flex-col">
          <h1 className="text-[32px] mb-[60px]">COMO CHEGAR</h1>
          <h2 className="text-[24px] mb-[32px]">Endereço:</h2>
          <div className="flex flex-col mb-[32px]">
            <span>Hotel Tivoli Mofarrej</span>
            <span>São Paulo/SP - Brasil</span>
            <span className="font-thin">
              Alameda Santos, 1437 - Cerqueira César, São Paulo
            </span>
          </div>
          <img src="/assets/line-gradient.png" alt="" />
        </div>

        <div className="w-[683px] h-[386px] rounded-xl overflow-hidden shadow-lg">
          {L && customIcon && (
            <MapContainer
              center={position}
              zoom={20}
              className="w-full h-full rounded-xl"
              scrollWheelZoom={false}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position} icon={customIcon}>
                <Popup>Tivoli Mofarrej São Paulo Hotel</Popup>
              </Marker>
            </MapContainer>
          )}
        </div>
      </div>
      <div className="container mx-auto text-center text-primary text-[24px]">
        <h1 className="mb-4 font-medium">REALIZAÇÃO</h1>
        <img src="/assets/line-separator.png" alt="" className="w-full mt" />
        <img
          src="/assets/logo-white.png"
          alt=""
          className="w-[234px] h-[60px] mx-auto mt-[40px]"
        />
      </div>
    </div>
  );
};

export default HowToArriveSection;
