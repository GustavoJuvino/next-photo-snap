"use client";
import React, { useState, useEffect } from 'react';
import { headerItems } from "./Header";
import styles from "./styles/MobileMenu.module.css";
import Button from "./Button";
import Link from "next/link";

const MobileMenu = () => {
  const [active, setActive] = useState(false);

  let body;

  useEffect(() => {
    body = document?.querySelector("body");
    if(active) body?.classList.add("mobile-menu-body");
    else body?.classList.remove("mobile-menu-body");
  }, [body, active])

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

        <div className={active ? `
                block
                md:hidden
                absolute
                z-[90]
                w-full
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
                    <ul className="
                            flex
                            flex-col
                            justify-center
                            items-center
                            select-none
                        "
                    >
                        {headerItems.map((item) => (
                            <Link href={`/${item}`} key={item}>
                                <li className="
                                        font-bold
                                        tracking-widest
                                        hover:text-light-gray
                                        my-3
                                        cursor-pointer
                                    "
                                >
                                    {item.toUpperCase()}
                                </li>
                            </Link>
                        ))}
                    </ul>
                    <div className="flex justify-center">
                        <hr className="w-[310px] my-5"/>
                    </div>
                    <div className="
                            flex
                            justify-center
                            mt-5
                        "
                    >
                        <Button 
                            type={1}
                            value="GET AN INVITE"
                            color="white"
                            background="black"
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