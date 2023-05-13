"use client";
import React, { useState } from 'react';
import { headerItems } from "./Header";
import styles from "./styles/MobileMenu.module.css";
import Button from "./Button";

const MobileMenu = () => {
  const [active, setActive] = useState(false);

  return (
    <section>
        <div className={active ? "absolute top-[70px] left-0 z-10 w-[100%] h-[300vh] bg-black bg-opacity-50" : ""}></div>
        <div className={styles.mobileButton}>
            <span 
                id={styles.hamburger} 
                className={active ? styles.active : ""}
                onClick={() => setActive(!active)}
            >
            </span>
        </div>        

        <div className={active ? `
                block
                md:hidden
                absolute
                z-20
                w-[100%]
                h-72
                left-0
                mt-7
                bg-white
                animate-[mobileMenu_0.5s_forwards]
            ` 
            : ""}
        >
            {active ? (
                    <div>
                        <ul className="flex flex-col justify-center items-center select-none">
                            {headerItems.map((item) => (
                                <li 
                                    key={item}
                                    className="
                                        font-bold
                                        tracking-widest
                                        hover:text-light-gray
                                        my-3
                                        cursor-pointer
                                    "
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="flex justify-center">
                            <hr className="w-[310px] my-5"/>
                        </div>
                        <div className="flex justify-center mt-5">
                            <Button 
                                type={1}
                                value="GET AN INVITE"
                                color="white"
                                background={true}
                                size="xl"
                            />
                        </div>
                    </div>
            ) : ""}
        </div>
    </section>
  )
}

export default MobileMenu