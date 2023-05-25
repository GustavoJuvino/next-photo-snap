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
        <div className="flex justify-center mt-[120px] mb-[48px] sm:text-lg overflow-x-hidden">
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
                        md:mx-8
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
                max-lg:flex-col
                items-center
                lg:justify-evenly
                mb-40
                lg:text-center
            "
        >
            {signaturesData.map((data) => (
                <div
                    key={data.type}
                    id={data.type}
                    className={`
                        flex
                        lg:flex-col
                        justify-center
                        items-center
                        lg:w-[350px]
                        md:w-[690px]
                        sm:w-[320px]
                        w-auto
                        lg:h-[400px]
                        md:h-[270px]
                        h-[410px]
                        max-lg:mt-6
                        lg:px-[30px]
                        sm:px-10 
                        bg-gray-100
                    `}
                >
                    <div className="
                        lg:block
                        md:grid
                        md:grid-cols-2
                        max-md:text-center
                    ">
                        <h2 className="text-l font-bold mb-5">
                                {data.type}
                        </h2>
                        <p className="
                                opacity-60
                                lg:mb-[40px]
                                max-md:mb-[40px]
                                md:mb-5
                                max-lg:col-start-1
                        ">
                            {data.description}
                        </p>
                        <h1 className="
                            flex
                            flex-col
                            lg:items-center
                            md:items-end
                            text-xxl
                            max-lg:col-start-2
                            max-lg:row-start-1
                        ">
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
                        <div className="
                            lg:mt-10
                            max-md:mt-10
                            max-lg:col-start-1
                            hover:text-purple-500
                        ">
                            <Button 
                                type={1}
                                value="PICK PLAN"
                                color={data.button === 1 ? "white" : "black"}
                                size="md"
                                background={data.button === 1 ? true : false}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </section>
    </section>
  );
}