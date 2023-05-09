"use client";
import React, { useState } from 'react';
import { headerItems } from "./Header";
import styles from "./MobileMenu.module.css";
import Button from "./Button";

const MobileMenu = () => {
  const [active, setActive] = useState(false);

  return (
    <div>
        <div className={styles.mobileButton}>
            <span 
                id={styles.hamburger} 
                className={active ? styles.active : ""}
                onClick={() => setActive(!active)}
            >
            </span>
        </div>        
        <div className="absolute w-screen h-64 left-0 mt-8">
            <ul>
                {headerItems.map((item) => (
                    <li className="
                        text-[16px]
                        font-bold
                        tracking-widest
                        text-center
                        hover:text-light-gray
                        cursor-pointer
                        my-5
                    "
                    >
                        {item}
                    </li>
                ))}
            </ul>
            <div className="flex justify-center">
                <hr className="w-[310px]"/>
            </div>
            <div className="flex justify-center mt-5">
                <Button 
                    type={1}
                    value="GET AN INVITE"
                    color="white"
                    background={true}
                />
            </div>
        </div>
    </div>
  )
}

export default MobileMenu