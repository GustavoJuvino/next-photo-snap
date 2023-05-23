import React, { Suspense } from 'react'
import Main from "../components/Main";
import Icons from "../components/Icons";

export default async function Features() {
  const asyncComponent: JSX.Element = await Icons(6, "xl");

  return (
    <section>
      <Main 
        title="FEATURES"
        content="We make sure all of our features are designed to be
          loved by every aspiring and even professional
          photograpers who wanted to share their stories.
        "
        gradientSize="sm"
        imgSrc="/assets/photographer.jpg"
        responsiveImg="md:bg-[url('/assets/tablet/photographer.jpg')]"
      />

      <section className=""
        >
          <Suspense fallback={<>Loading...</>}>
            {asyncComponent}
          </Suspense>
        </section>
    </section>
  )
}
