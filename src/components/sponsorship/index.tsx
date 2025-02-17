/* eslint-disable @next/next/no-img-element */

import { sponsorshipData } from "@/data/sponsorship-data";

const SponsorshipSection = () => {
  return (
    <div className="container mx-auto text-center text-primary text-[24px]">
      <h1 className="mb-4 font-medium">REALIZAÇÃO</h1>
      <img src="/assets/line-separator.png" alt="" className="w-full mt" />
      <img
        src="/assets/logo-white.png"
        alt="Logo"
        className="w-[234px] h-[60px] mx-auto mt-[40px]"
      />
      <div className="mt-[116px] grid grid-cols-2 mb-[86px]">
        {sponsorshipData
          .slice(0, 2)
          .map(({ title, separatorImage, logos }, index) => (
            <div key={title} className={`w-full flex flex-col gap-4 mx-auto `}>
              <h1
                className={`mb-4 font-medium ${
                  index === 0 ? "me-[150px]" : "ms-[150px]"
                }`}
              >
                {title}
              </h1>
              <img
                src={separatorImage}
                alt=""
                className={`w-[520px] ${index === 0 ? "me-auto" : "ms-auto"}`}
              />
              <div
                className={`grid grid-cols-2 gap-3 ${
                  index === 0
                    ? "me-auto mt-[45px]"
                    : "ms-[325px] w-[270px] mt-[20px]"
                }  items-center`}
              >
                {logos.map(({ src, alt }, logoIndex) => (
                  <img
                    key={logoIndex}
                    src={src}
                    alt={alt}
                    className={logoIndex === 1 ? "ms-auto" : ""}
                  />
                ))}
              </div>
            </div>
          ))}
      </div>

      <h1 className="mb-4 font-medium">PATROCÍNIO BRONZE</h1>
      <img
        src="/assets/line-separator.png"
        alt=""
        className="w-full mb-[80px]"
      />
      <div className="flex items-center justify-center flex-col">
        {sponsorshipData[2].logos.length > 0 && (
          <div className="justify-center grid grid-cols-2 max-w-[840px] w-full mb-[60px]">
            {sponsorshipData[2].logos.slice(0, 2).map(({ src, alt }, index) => (
              <img key={index} src={src} alt={alt} className="mx-auto" />
            ))}
          </div>
        )}
        {sponsorshipData[2].logos.length > 2 && (
          <div className="justify-center grid grid-cols-4 max-w-[840px] w-full mb-[60px] items-center">
            {sponsorshipData[2].logos.slice(2, 6).map(({ src, alt }, index) => (
              <img
                key={index}
                src={src}
                alt={alt}
                className={index === 2 ? "-ms-5" : ""}
              />
            ))}
          </div>
        )}
        {sponsorshipData[2].logos.length > 6 && (
          <div className="justify-center grid grid-cols-3 max-w-[840px] w-full mb-[60px] items-center">
            {sponsorshipData[2].logos.slice(6).map(({ src, alt }, index) => (
              <img key={index} src={src} alt={alt} />
            ))}
          </div>
        )}
      </div>

      <div className="mt-[50px] grid grid-cols-2 mb-[113px]">
        {sponsorshipData.slice(3).map(({ title, separatorImage, logos }) => (
          <div
            key={title}
            className="flex flex-col gap-4 max-w-[520px] mx-auto"
          >
            <h1 className="mb-4 font-medium">{title}</h1>
            <img src={separatorImage} alt="" className="mx-auto" />
            <div className="grid grid-cols-2 gap-3 mx-auto mt-[35px] items-center">
              {logos.map(({ src, alt }, index) => (
                <img
                  key={index}
                  src={src}
                  alt={alt}
                  className={index === 1 ? "ms-[30px]" : ""}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorshipSection;
