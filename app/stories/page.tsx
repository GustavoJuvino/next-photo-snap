import React from 'react'
import Button from "../components/Button";
import Image from "next/image";
import Card from "../components/Card";
import styles from "./styles/Stories.module.css";

export const metadata = {
  title: "Stories"
}

async function getData() {
  const res = await import("../api/json/route");

  return await (await res.GET()).json();
}

export default async function Stories() {
  const data = await getData();

  return (
    <main>
      <section className="
          grid
          md:grid-cols-1
          mt-7
          text-white
          items-center
          relative
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
            md:z-50
            max-md:bg-black
            flex
            flex-col
            justify-center
          "
        >
          <span className="tracking-[2px] font-bold max-md:pt-12">
            LAST MONTH’S FEATURED STORY
          </span>
          <h1 className="text-xxl pt-6 max-mobile:text-l">
            HAZY FULL <br/> MOON OF <br/> APPALACHIA
          </h1>
          <div className="flex pt-4 max-mobile:text-sm">
            <p className="opacity-[75%]">
              March 2nd 2020
            </p>
            <span className="pl-3 opacity-[100%]">
              by John Applessed
            </span>
          </div>
          <p className="opacity-[75%] py-6 sm:w-[410px] max-mobile:text-sm">
            The dissected plateau area, while not actually made up
            of geological mountains, is popularly called "mountains,"
            especially in eastern Kentucky and West Virginia, and
            while the ridges are not high, the terrain is extremely
            rugged.
          </p>
          <div className={`${styles.customHover} max-md:pb-12`}>
            <Button 
              type={2}
              value={"GET AN INVITE"}
              color="white"
            />
          </div >
        </div>

        {/* Background */}
        <div className="              
            col-start-1
            row-start-1
            bg-black
            opacity-20
            w-[100%]
            mobile:h-[100%]
            h-[315px]
            z-10
          "
        />
        <Image
          width={1920}
          height={650}
          src="/assets/moon-of-appalacia.jpg"
          blurDataURL="/assets/moon-of-appalacia.jpg"
          placeholder="blur"
          alt="moon-of-appalacia"
          className="
            w-screen
            md:h-[650px]
            mobile:h-[100%]
            h-[315px]
            object-cover
            col-start-1
            row-start-1
            z-20
            mix-blend-multiply
          "
        />
      </section>

      {/* Cards */}
      <section className="grid lg:grid-cols-4 sm:grid-cols-2">
        {data?.map((data: dataProps) => (
          <div 
            key={data.id}
            className="
              hover:translate-y-[-24px]
              duration-300
              z-50
            "
            >
            <Card 
              title={data.title}
              author={data.author}
              imgSrc={data.src}
            />
          </div>
        ))}
      </section>
    </main>
  )
}
