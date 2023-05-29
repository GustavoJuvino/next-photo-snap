import React from 'react'
import Gradient from "./Gradient"
import Button from "./Button";
import Image from "next/image";

const Beta = () => {
  return (
    <section className="
            w-full
            h-[280px]
            grid
            grid-cols-1
            relative
        "
    >
        <Gradient size="md" responsible={true} />
        <div className="
                flex
                max-md:flex-col
                md:justify-between
                justify-center
                md:items-center
                lg:px-[165px]
                md:px-6
                mobile:px-10
                col-start-1
                row-start-1
                z-30
            "
        >
            <div>
                <h1 className="sm:text-xxl text-l text-white">
                    WE'RE IN BETA.<br />
                    GET YOUR INVITE <br/>
                    TODAY!
                </h1>
            </div>
            <div className="max-md:pt-6">
                <Button 
                type={2}
                value="GET AN INVITE"
                color="white"
                />
            </div>
        </div>

        <div className="              
                col-start-1
                row-start-1
                bg-black
                opacity-20
                w-[100%]
                z-10
            "
        />
        <Image 
            width={1920}
            height={280}
            alt="Invite-Background"
            src="/assets/bg-beta.jpg"
            className="
                w-screen
                h-[280px]
                col-start-1
                row-start-1
                z-20
                mix-blend-multiply
                object-cover
                
            "
        />
    </section>
  )
}

export default Beta;