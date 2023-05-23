import React from 'react';
import Image from "next/image";
import styles from "./styles/Card.module.css";

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
        <div className="
                w-[100%]
                h-[34rem]
                grid
                grid-cols-1
                cursor-pointer
            "
        >
            <div className="
                    bg-gradient-to-t
                    from-black
                    via-white
                    to-white
                    row-start-1
                    col-start-1
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
            <div className={`
                    row-start-1
                    col-start-1
                    z-10
                    flex
                    flex-col
                    justify-end
                    mobile:px-10
                    py-10
                    text-white
                    ${styles.textContainer}
                `}
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

export default Card;