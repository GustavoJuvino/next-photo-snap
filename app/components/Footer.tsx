import React from 'react';
import Image from "next/image";
import Button from "./Button";

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
    <footer className="
        flex
        justify-between
        max-md:flex-col
        max-md:items-center
        max-md:text-center
        h-[auto]
        py-[64px]
        lg:mt-[7.5rem]
        1xl:px-[165px]
        px-6
        bg-black
      "
    >
      <section className="grid md:grid-cols-2 max-md:grid-rows-2">
        <div>
          <Image
            src={"assets/logo-white.svg"}
            width={170}
            height={16}
            alt="Logo"
            className="w-auto h-auto mt-[2.5px]"
          />
        </div>

        <ul className="
            lg:ml-28
            md:h-[7.5rem]
            lg:col-start-2
            col-start-1
            max-lg:flex
            max-md:flex-col
            max-md:row-start-3
            max-md:mt-12
          "
        >
          {footerItems.map((item) => (
            <li className="
                text-sm
                text-white
                font-bold
                tracking-[2px]
                lg:mb-[20.6px]
                cursor-pointer
                duration-300
                hover:opacity-30
                max-lg:pr-6
                max-lg:mt-8
                max-md:mt-5
                max-md:pl-5
              "
            >
              {item}
            </li>
          ))}
        </ul>

        <ul className="
            flex
            md:col-start-1
            max-md:justify-between
            max-md:row-start-2
            max-md:mt-8
          "
        >
          {socialMedias.map((icon) => (
            <li className="md:pr-3">
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
      </section>

      <section className="text-white max-md:mt-[120px]">
        <div>
          <Button 
            type={2}
            value={"GET AN INVITE"}
            background={true}
            color="white"
          />
        </div>
        <div className="md:pt-[6.2rem] pt-9 opacity-50">
          <span>Copyright 2019. All Rights Reserved</span>
        </div>
      </section>
    </footer>
  )
}

export default Footer