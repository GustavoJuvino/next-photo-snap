
import Image from "next/image";
import React from 'react';

interface ButtonProps {
    value: string;
    type: number;
    size?: string;
    color: string;
    background: boolean;
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
            hover:bg-light-gray
            hover:text-black
            ${size === "default" ? "w-40 h-10" : "w-[310px] h-12"}
            ${background ? "bg-black" : "bg-light-gray"}
            ${color === "black" ? "text-black" : "text-white"}
            ${type === 2 && `
                w-52
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
                    src={"assets/arrow.svg"}
                    width={42}
                    height={12}
                    alt="Arrow"
                />
            </div>
        ) : 
            <p>{value}</p>
        }
    </button>
  )
}

export default Button