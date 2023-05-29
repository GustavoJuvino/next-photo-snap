import Image from "next/image";
import React from 'react';

async function getData() {
    const res = await import("../api/json/icons-data/route");
  
    if (!res) {
      throw new Error('Failed to fetch data');
    }
  
    return await (await res.GET()).json();
   
  }

interface dataIconsProps {
  title: string;
  description: string;
  src: string;
}

export default async function Icons(items: number, width: string) {
  const data = await getData();

  return (
    <div className={`
        grid
        lg:grid-cols-3
        ${width === "sm" && `
          lg:py-[7.5rem]
          py-10
          max-lg:gap-10
          lg:[&>*:nth-child(2)]:pt-[35.5px]
        `}

        ${width === "xl" && `
          pb-24
          pt-[52px]
          md:grid-cols-2
          md:[&>*:nth-child(2)]:pt-[35.5px]
        `}

      `}
    >
      {data?.slice(0, items).map((data: dataIconsProps) => (
        <div key={data.title} className="flex flex-col items-center">
          <Image 
            width={72}
            height={72}
            alt="img-icon"
            src={data.src}
            className="w-auto h-auto my-11"
          />

          <div className="mobile:w-[23rem] text-center">
            <h3 className="text-lg font-bold">{data?.title}</h3>
            <p className="opacity-60 leading-6 mt-4">
              {data?.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}


