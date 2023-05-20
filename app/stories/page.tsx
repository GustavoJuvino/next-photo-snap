import React from 'react'
import Button from "../components/Button";
import Image from "next/image";

const Stories = () => {
  return (
    <main>
      <section className="
          grid
          md:grid-cols-1
          max-md:grid-rows-2
          mt-7
          text-white
          items-center
        "
      >
        <div className="
            md:col-start-1
            md:row-start-1
            lg:ml-40
            pl-2
            mobile:pl-10
            max-md:h-[100%]
            max-md:w-[100%]
            z-30
            max-md:bg-black
            flex
            flex-col
            justify-center
          "
        >
          <span className="tracking-[2px] font-bold">
            LAST MONTH’S FEATURED STORY
          </span>
          <h1 className="text-xxl tracking-[4.17px] mt-6 max-mobile:text-l">
            HAZY FULL <br/> MOON OF <br/> APPALACHIA
          </h1>
          <div className="flex mt-4 max-mobile:text-sm">
            <p className="opacity-[75%]">
              March 2nd 2020
            </p>
            <span className="pl-3 opacity-[100%]">
              by John Applessed
            </span>
          </div>
          <p className="opacity-[75%] my-6 sm:w-[410px] max-mobile:text-sm">
            The dissected plateau area, while not actually made up
            of geological mountains, is popularly called "mountains,"
            especially in eastern Kentucky and West Virginia, and
            while the ridges are not high, the terrain is extremely
            rugged.
          </p>
          <Button 
            type={2}
            value="READ THE STORY"
            color="white"
            background={true}
          />
        </div>

        {/* Background */}
        <div className="              
            col-start-1
            row-start-1
            bg-black
            opacity-20
            w-[100%]
            h-[650px]
            z-10
          "
        ></div>
        <Image
          width={1920}
          height={650}
          src="/assets/moon-of-appalacia.jpg"
          alt="moon-of-appalacia"
          className="
            w-screen
            h-[650px]
            object-cover
            col-start-1
            row-start-1
            z-20
            mix-blend-multiply
          "
        />
      </section>
    </main>
  )
}

export default Stories; 