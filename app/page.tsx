import Image from "next/image";
import Button from "./components/Button";
import Gradient from "./components/Gradient";
import Main from "./components/Main";

export default async function Home() {

  return (
    <main>
      <Main 
        content="Photosnap is a platform for photographers and visual
        storytellers. We make it easy to share photos, tell
        stories and connect with others."
        gradientSize="xl"
        button={true}
        buttonValue="GET AN INVITE"
        imgSrc="/assets/create-and-share.jpg"
      />

      <section className="flex">
        <Image 
          className="w-[980px] h-auto"
          width={980}
          height={600}
          src={"/assets/beautiful-stories.jpg"}
          alt="beautiful-stories"
        />
        <div className="w-[57rem] flex justify-center">
          <div className="text-left">
            <h1 className="text-xxl mt-40">
              BEAUTIFUL <br />
              STORIES <br />
              EVERY TIME
            </h1>
            <p className="leading-6 opacity-60 mt-5 mb-12">
              We provide design templates to ensure your stories <br />
              look terrific. Easily add photos, text, embed maps and <br />
              media from other networks. Then share your story with <br /> everyone. 
            </p>
            <Button 
              type={2}
              value="VIEW THE STORIES"
              color="black"
            />
          </div>
        </div>
      </section>

      <section className="flex justify-between">
        <div className="w-[57rem] flex justify-center">
          <div className="text-left">
            <h1 className="text-xxl mt-40">
              DESIGNED FOR <br />
              EVERYONE
            </h1>
            <p className="leading-6 opacity-60 mt-5 mb-12">
              Photosnap can help you create stories that resonate <br />
              with your audience.  Our tool is designed <br />
              for photographers of all levels, brands, businesses you <br />
              name it. 
            </p>
            <Button 
              type={2}
              value="VIEW THE STORIES"
              color="black"
            />
          </div>
        </div>
        <Image 
            className="w-[980px] h-auto"
            width={980}
            height={600}
            src={"/assets/designed-for-everyone.jpg"}
            alt="designed-for-everyone"
        />
      </section> 
    </main>
  )
}
