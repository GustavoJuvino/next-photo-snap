import React from 'react';
import Main from "../components/Main";
import Prices from "./Prices";
import Compare from "./Compare";
import Beta from "../components/Beta";

export const metadata = {
  title: "Pricing"
}

const Pricing = () => {
  return (
    <section>
        <Main
            title="PRICING"
            content="
                Create a your stories, Photosnap is a platform for
                photographers and visual storytellers. It’s the simple
                way to create and share your photos.
            "
            gradientSize="sm"
            imgSrc="/assets/hero.jpg"
        />

        <Prices />
        <Compare />
        <Beta />
    </section>
  )
}

export default Pricing;