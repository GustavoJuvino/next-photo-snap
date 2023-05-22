import React from 'react';
import Gradient from "./Gradient";
import Button from "./Button";
import Image from "next/image";

interface MainProps {
    title?: string;
    content: string;
    gradientSize: string;
    imgSrc?: string;
    responsiveImg?: string;
    // Button Props
    button?: boolean;
    buttonValue?: string | undefined;

}

const Main: React.FC<MainProps> = ({
    title,
    content,
    gradientSize,
    imgSrc = "",
    responsiveImg,
    button,
    buttonValue = ""
}) => {
  return (
    <section className="flex max-md:flex-col-reverse mt-7">
        <div className="
            md:w-[50rem]
            md:h-[48rem]
            h-[30rem]
            w-[100%]
            flex
            relative
            md:justify-center
            items-center
            lg:px-40
            mobile:px-10
            bg-black
            text-white
        "
        >
            <div className="text-left w-[400px]">
                <Gradient size={gradientSize} responsible={true} />
                    <h1 className="mobile:text-xxl text-l text-light-gray mb-5">
                        {title}
                    </h1>
                <p className="leading-6 opacity-60 mb-12">
                    {content}
                </p>
                {button && (
                    <Button 
                        type={2}
                        value={buttonValue}
                        color="white"
                        background={true}
                    />
                )}
            </div>
        </div>

        <div className={ responsiveImg && `
            xl:hidden
            w-full
            h-auto
            bg-no-repeat
            bg-cover
            ${responsiveImg}
        `}
        />
        <Image 
            width={850}
            height={650}
            src={imgSrc}
            alt="main-img"
            className={`
                w-full
                md:h-[768px]
                h-auto
                object-cover
                ${responsiveImg ? "max-xl:hidden" : "block"}
                overflow-x-hidden
                max-md:block
            `}
        />
    </section>
  )
}

export default Main