import React from 'react';
import Main from "../components/Main";
import Prices from "../components/Prices";

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
    </section>
  )
}

export default Pricing;