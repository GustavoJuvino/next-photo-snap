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
        h-[250px]
        mt-[7.5rem]
        px-[165px]
        bg-black
      "
    >
      <section className="flex justify-between">
        <div className="flex mt-[64px]">
          <div>
            <Image
              className="w-auto h-auto mt-[2px]"
              src={"assets/logo-white.svg"}
              width={170}
              height={16}
              alt="Logo"
              priority={true}
            />
              <ul className="flex mt-[96px]">
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
          </div>

          <ul className="ml-[100px]">
            {footerItems.map((item) => (
                <li className="
                      text-sm
                      font-bold
                      text-white
                      tracking-[2px]
                      cursor-pointer
                      duration-300
                      hover:opacity-30
                      mb-[20px]
                    "
                  >
                    {item}
                </li>
            ))}
          </ul>
          </div>
          
          <section className="mt-[60px]">
            <div>
                <Button 
                  type={2}
                  value={"GET AN INVITE"}
                  background={true}
                  color="white"
                />
            </div>
            <div className="mt-[96px] text-white">
              <span>teste</span>
            </div>
          </section>
      </section>


      {/* <section className="w-[380px] py-[64px] relative">
        <div className="flex flex-col-reverse">
          <ul className="flex mt-[72px]">
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

        </div>
      </section>

      <section className="text-white mt-[50px]">
        <div>
            <Button 
              type={2}
              value={"GET AN INVITE"}
              background={true}
              color="white"
            />
        </div>
        <div className="pt-[90.5px] text-sm opacity-50">
          <span>Copyright 2019. All Rights Reserved</span>
        </div>
      </section> */}
    </footer>
  )
}

export default Footer