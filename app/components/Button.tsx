import { after } from "node:test";
import React from 'react';

interface ButtonProps {
    value: string;
    size?: string;
    type: number;
    background: boolean;
}

const Button: React.FC<ButtonProps> = ({
    value,
    size,
    type,
    background,
}) => {

  return (
    <button 
        className={`
            h-10
            text-white
            text-xs
            font-bold
            tracking-widest 
            duration-300
            hover:bg-light-gray
            hover:text-black
            ${size === "xl" ? `w-[17rem]` : "w-40"}
            ${background ? "bg-black" : "bg-light-gray"}
            ${type === 2 && "hover:bg-transparent bg-transparent text-black text-left hover:underline"}
        `}
    >
        {value}
    </button>
  )
}

export default Button