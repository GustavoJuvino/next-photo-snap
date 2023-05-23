"use client";
import { useState } from "react";

export default function Prices() {
  const [state, setState] = useState<boolean>(false);

  return (
    <section className="flex justify-center mt-[120px] mb-[48px] text-lg">
        <ul className="flex">
            <li className={`
                px-8
                font-bold
                duration-300
                ${state ? "text-gray-400" : "text-black"}
            `}
            >
                Monthly
            </li>
            <li 
                className={`
                    flex
                    flex-col
                    items-start
                    justify-center
                    mx-8
                    pl-1
                    w-[64px]
                    h-[32px]
                    rounded-2xl
                    cursor-pointer
                    duration-300
                    ${state ? "bg-black" : "bg-light-gray"}
                `}
                onClick={() => setState(!state)}
            >
                <div className={`
                        w-6
                        h-6
                        rounded-2xl
                        duration-300
                        ${state ? "translate-x-8 bg-white" : "translate-x-0 bg-black"}
                    `}
                />
            </li>
            <li className={`
                px-8
                font-bold
                duration-300
                ${state ? "text-black" : "text-gray-400"}
            `}
            >
                Yearly
            </li>
        </ul>
    </section>
  );
}