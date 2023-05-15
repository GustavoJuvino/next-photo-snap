import React from 'react';
import Image from "next/image";

interface CardProps {
    title: string;
    author: string;
    imgSrc: string;
}

const Card: React.FC<CardProps> = ({
    title,
    author,
    imgSrc
}) => {
    return (
        <div className="w-[100%] cursor-pointer relative hover:bottom-6">
            <div className="
                    bg-gradient-to-t
                    from-black
                    to-white
                "
            >
                <Image 
                    width={384}
                    height={600}
                    alt="card-img"
                    src={imgSrc}
                    className="w-[100%] h-[34rem] object-cover mix-blend-multiply"
                />
            </div>
            <div className="
                    z-20
                    w-[100%]
                    bottom-0
                    absolute
                    flex
                    flex-col
                    justify-end
                    px-10
                    py-10
                    text-white
                "
            >
                <h1 className="text-xl font-bold leading-6 mb-1">
                    {title}
                </h1>
                <span className="text-sm mb-4">
                    {`by ${author}`}
                </span>
                <hr className="opacity-40" />
                <div className="flex justify-between mt-5 text-sm">
                    <p className="font-bold tracking-[2px] cursor-pointer">
                        READ STORY
                    </p>
                    <div>
                        <Image
                            className="w-auto h-auto"
                            width={42}
                            height={12}
                            alt="Arrow"
                            src={"assets/arrow-white.svg"}
                        />
                    </div>
                </div>
            </div>
        </div>
      )
}

export default Card