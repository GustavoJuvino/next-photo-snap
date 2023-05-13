import Image from "next/image";
import React from 'react';
import Button from "./Button";

interface ContentProps {
    type: number;
    title: string;
    content: string;
    imgSrc: string;    
}

const Content: React.FC<ContentProps> = ({
    type,
    title,
    content,
    imgSrc,
}) => {
  return (
    <section className={`md:flex block ${type === 2 && `flex-row-reverse`}`}> 
        <Image 
          width={980}
          height={600}
          src={imgSrc}
          alt="beautiful-stories"
          className="                
            lg:w-[54%]
            md:w-[273px]
            md:h-[600px]
            h-[400px]
            object-cover
          "
        />
        <div className={`
            flex
            items-center
            md:justify-center
            md:w-[50rem]
            max-md:my-16
            max-md:px-10
            ${type === 2 && `justify-between`}
        `}
            
        >
          <div className="text-left w-[380px]">
            <h1 className="mobile:text-xxl text-l">
                {title}
            </h1>
            <p className="leading-6 opacity-60 mt-5 mb-12">
                {content}
            </p>
            <Button
              type={2}
              value="VIEW THE STORIES"
              color="black"
            />
          </div>
        </div>
    </section>
  )
}

export default Content