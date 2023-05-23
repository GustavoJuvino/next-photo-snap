import Image from "next/image";
import React from 'react';

async function getData() {
    const res = await fetch("http://localhost:3000/api/json/icons-data", { next: { revalidate: 60 } });
  
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
  
    return res.json();
   
  }

interface dataIconsProps {
  title: string;
  description: string;
  src: string;
}

export default async function Icons(items: number) {
  const data = await getData();

  return (
    <>
      {data?.slice(0, items).map((data: dataIconsProps) => (
        <div className="flex flex-col items-center max-lg:pt-14">
          <Image 
            width={72}
            height={72}
            alt="img-icon"
            src={data.src}
            className="w-auto h-auto mb-11"
          />

          <div className="sm:w-[23rem] text-center">
            <h3 className="text-lg font-bold">{data?.title}</h3>
            <p className="opacity-60 leading-6 mt-4">
              {data?.description}
            </p>
          </div>
        </div>
      ))}
    </>
  )
}


