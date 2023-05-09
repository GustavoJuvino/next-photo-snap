"use client";
import React, { useState } from 'react';
import { headerItems } from "./Header";
import styles from "./styles/MobileMenu.module.css";
import Button from "./Button";

const MobileMenu = () => {
  const [active, setActive] = useState(false);

  return (
    <section>
        <div className={styles.mobileButton}>
            <span 
                id={styles.hamburger} 
                className={active ? styles.active : ""}
                onClick={() => setActive(!active)}
            >
            </span>
        </div>        

        <div className="block md:hidden absolute w-screen h-64 left-0 mt-7 animate-[mobileMenu_0.5s_forwards]">
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