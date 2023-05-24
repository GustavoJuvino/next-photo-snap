import Image from "next/image";
import React from 'react';

interface ButtonProps {
    value: string;
    type: number;
    size?: string;
    color: string;
    background?: boolean;
    responsive?: string;
}

const Button: React.FC<ButtonProps> = ({
    value,
    type,
    size,
    color,
    background,
    responsive
}) => {

  return (
    <button 
        className={`
            text-xs
            font-bold
            tracking-widest 
            duration-300
            select-none
            w-40
            h-10
            ${size === "xl" && "w-[310px] h-12"}
            ${size === "md" && "w-[270px] h-10"}
            ${background ? "bg-black" : "bg-white"}
            ${color === "black" ? "text-black" : "text-white"}
            ${type === 1 && `
                hover:bg-light-gray
                hover:text-black
            `}
            ${type === 2 && `
                w-52
                h-auto
                bg-transparent
                text-left
                hover:bg-transparent
                hover:underline
            `}
            ${responsive === "md" && `md:block hidden`}
        `}
    >
        {type === 2 ? (
            <div className="flex justify-between">
                <p>{value}</p>
                <Image
                    className="w-auto h-auto"
                    width={42}
                    height={12}
                    alt="Arrow"
                    src={color === "black" ? "assets/arrow-black.svg" : "assets/arrow-white.svg"}
                />
            </div>
        ) : 
            <p>{value}</p>
        }
    </button>
  )
}

export default Button