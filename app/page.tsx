import Image from "next/image";
import Button from "./components/Button";
import Gradient from "./components/Gradient";

export default async function Home() {

  return (
    <main>
      <section className="flex max-md:flex-col-reverse mt-7 z-1">
        <div 
          className="
            md:w-[50rem]
            md:h-[48rem]
            h-[30rem]
            w-[100%]
            flex
            relative
            md:justify-center
            items-center
            lg:px-40
            px-10
            bg-black
            text-white
          "
        >
            <div className="text-left">
                <Gradient size="xl" responsible={true} />
                <h1 className="mobile:text-xxl text-l text-light-gray mb-5">
                  CREATE AND <br />
                  SHARE YOUR <br />
                  PHOTO STORIES.
                </h1>
                <p className="leading-6 opacity-60 mb-12">
                  Photosnap is a platform for photographers and visual<br />
                  storytellers. We make it easy to share photos, tell<br />
                  stories and connect with others.<br />
                </p>
                <Button 
                  type={2}
                  value="GET AN INVITE"
                  color="white"
                  background={true}
                />
            </div>
        </div>
          <Image 
              width={850}
              height={650}
              src={"/assets/create-and-share.jpg"}
              alt="create-and-share"
              className=" 
                lg:w-[60%]
                md:w-[273px]
                md:h-[768px]
                w-[100vw]
                h-[450px]
                object-cover
                object-bottom
              "
            />
      </section>

      {/* <section className="flex">
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

      <section className="flex justify-between text-center">
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
      </section> */}
    </main>
  )
}
