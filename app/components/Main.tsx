import React from 'react';
import Gradient from "./Gradient";
import Button from "./Button";
import Image from "next/image";

interface MainProps {
    title?: string;
    content: string;
    gradientSize: string;
    imgSrc: string;
    // Button Props
    button?: boolean;
    buttonValue?: string | undefined;

}

const Main: React.FC<MainProps> = ({
    title,
    content,
    gradientSize,
    imgSrc,
    button,
    buttonValue = ""
}) => {
  return (
    <section className="flex max-md:flex-col-reverse mt-7 z-1">
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
            px-10
            bg-black
            text-white
        "
        >
            <div className="text-left">
                <Gradient size={gradientSize} responsible={true} />
                {!title ? (
                    <h1 className="mobile:text-xxl text-l text-light-gray mb-5">
                        CREATE AND <br />
                        SHARE YOUR <br />
                        PHOTO STORIES.
                    </h1>
                ) :  <div>{title}</div>}
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
        <Image 
            width={850}
            height={650}
            src={imgSrc}
            alt="create-and-share"
            className=" 
                lg:w-[60%]
                md:w-[273px]
                md:h-[768px]
                w-[100vw]
                h-[450px]
                object-cover
                object-bottom
            "
        />
    </section>
  )
}

export default Main