import React from 'react';
import Image from "next/image";

const socialMedias = [
  "facebook.svg",
  "youtube.svg",
  "twitter.svg",
  "pinterest.svg",
  "instagram.svg"
];

const footerItems = [
  "HOME",
  "STORIES",
  "FEATURES",
  "PRICING",
];

const Footer = () => {
  return (
    <footer className="mt-[7.5rem] h-[auto] bg-black px-[10.31rem]">
      <section className="w-[380px] py-[64px] relative">
        <div>
          <Image
            className="w-auto h-auto"
            src={"assets/logo-white.svg"}
            width={170}
            height={16}
            alt="Logo"
            priority={true}
            
          />
        </div>

        <div className="flex">
          <ul className="flex col-start-1 mt-[95px]">
            {socialMedias.map((icon) => (
              <li className="pr-3">
                <Image
                  id="social-media-icon"
                  src={`assets/${icon}`}
                  width={20}
                  height={20}
                  alt="Social Media Icon"
                  className="w-auto h-auto duration-500 cursor-pointer"
                />
                </li>
            ))}
          </ul>

          <ul className="absolute top-[3.75rem] right-0">
            {footerItems.map((item) => (
              <li className="
                    text-sm
                    font-bold
                    text-white
                    tracking-[2px]
                    pb-5
                    cursor-pointer
                    duration-300
                    hover:opacity-30
                  "
                >
                  {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </footer>
  )
}

export default Footer