import React from 'react'
import Button from "../components/Button";
import Image from "next/image";

const Stories = () => {
  return (
    <main>
      <section className="grid grid-cols-1 mt-7 text-white items-center">
        <div className="col-start-1 row-start-1 w-[410px] ml-40 z-30">
          <span className="tracking-[2px] font-bold">
            LAST MONTH’S FEATURED STORY
          </span>
          <h1 className="text-xxl tracking-[4.17px] mt-6">
            HAZY FULL <br/> MOON OF <br/> APPALACHIA
          </h1>
          <div className="flex mt-4">
            <p className="opacity-[75%]">
              March 2nd 2020
            </p>
            <span className="pl-3 opacity-[100%]">
              by John Applessed
            </span>
          </div>
          <p className="opacity-[75%] my-6">
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
            w-[100%]
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