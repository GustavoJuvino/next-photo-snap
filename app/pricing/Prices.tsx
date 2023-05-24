"use client";
import { useState } from "react";
import "./styles/Prices.css";
import Button from "../components/Button";

export default function Prices() {
  const [state, setState] = useState<boolean>(false);

  const signaturesData = [
        {
            type: "Basic",
            description: `
                Includes basic usage of our platform.
                Recommended for new and aspiring
                photographers.
            `,
            price: [19.00, 190.00],
            button: 1
        },
        {
            type: "Pro",
            description: `
                More advanced features available.
                Recommended for photography
                veterans and professionals.
            `,
            price: [39.00, 390.00],
            button: 2
        },
        {
            type: "Business",
            description: `
                Additional features available such as
                more detailed metrics. Recommended
                for business owners.
            `,
            price: [99.00, 990.00],
            button: 1
        }
    ]

  

  return (
    <section>
        <div className="flex justify-center mt-[120px] mb-[48px] text-lg">
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
        </div>
        
        {/* Signatures */}
        <section 
            className="
                flex
                items-center
                justify-evenly
                mb-40
                text-center
            "
        >
            {signaturesData.map((data) => (
                <div
                    id={data.type}
                    className={`
                        flex
                        flex-col
                        justify-center
                        items-center
                        w-[350px]
                        h-[400px]
                        px-[30px]
                        bg-gray-100
                    `}
                >
                    <div>
                        <h2 className="text-l font-bold mb-5">
                            {data.type}
                        </h2>
                        <p className="
                            opacity-60
                            mb-[40px]
                        ">
                            {data.description}
                        </p>
                        <h1 className="flex flex-col text-xxl">
                            $ {!state 
                                ? data.price[0].toFixed(2)
                                : data.price[1].toFixed(2)
                            }
                            <span className="
                                text-sm
                                tracking-normal
                                font-normal
                                opacity-60
                            "
                            >
                                per month
                            </span>
                        </h1>
                    </div>

                    <div className="mt-10 hover:text-purple-500">
                        <Button 
                            type={1}
                            value="PICK PLAN"
                            color={data.button === 1 ? "white" : "black"}
                            size="md"
                            background={data.button === 1 ? true : false}
                        />
                    </div>
                </div>
            ))}
        </section>
    </section>
  );
}