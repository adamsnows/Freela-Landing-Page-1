import {
  ComissionCardGrid,
  OrganizationCardGrid,
} from "../card/organization-card";

/* eslint-disable @next/next/no-img-element */
const OrganizingCommitteeSection = () => {
  return (
    <div className="relative">
      <img
        src="/assets/blur/ellipse-gradient.png"
        alt=""
        className="absolute end-[-400px]"
      />
      <img
        src="/assets/blur/purple-ellipse-gradient.png"
        alt=""
        className="absolute start-[-300px] top-[25%]"
      />
      <div className="mt-[188px] container mx-auto mb-[112px]">
        <h1 className="text-center text-[28px] text-white uppercase font-light mb-[60px]">
          <span className="text-primary font-medium">Comissão</span>{" "}
          Organizadora
        </h1>
        <ComissionCardGrid />
        <h1 className="text-center text-[28px] text-white uppercase font-light mt-[103px] mb-[60px]">
          <span className="text-primary font-medium">Comissão</span> Científica
        </h1>
        <OrganizationCardGrid />
      </div>
    </div>
  );
};

export default OrganizingCommitteeSection;
