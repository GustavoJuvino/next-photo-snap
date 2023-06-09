import React, { Suspense } from 'react'
import Main from "../components/Main";
import Icons from "../components/Icons";
import Beta from "../components/Beta";

export const metadata = {
  title: "Features"
}

export default async function Features() {
  const asyncComponent: JSX.Element = await Icons(6, "xl");

  return (
    <section>
      <Main 
        title="FEATURES"
        content="
          We make sure all of our features are designed to be
          loved by every aspiring and even professional
          photograpers who wanted to share their stories.
        "
        gradientSize="sm"
        imgSrc="/assets/photographer.jpg"
        responsiveImg="md:bg-[url('/assets/tablet/photographer.jpg')]"
      />

      {/* Icons */}
      <Suspense fallback={<>Loading...</>}>
        {asyncComponent}
      </Suspense>

      <Beta />
    </section>
  )
}
