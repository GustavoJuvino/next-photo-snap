import Main from "./components/Main";
import Image from "next/image";
import Button from "./components/Button";

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

      <section className="md:flex block">
        <Image 
          width={980}
          height={600}
          src={"/assets/beautiful-stories.jpg"}
          alt="beautiful-stories"
          className="                
            lg:w-[54%]
            md:w-[273px]
            md:h-[600px]
            h-[400px]
            object-cover
          "
        />
        <div className="flex md:justify-center items-center md:w-[50rem] max-md:my-16 max-md:px-10">
          <div className="text-left">
            <h1 className="mobile:text-xxl text-l">
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

      {/* <section className="flex justify-between max-md:flex-col-reverse">
        <div className="flex justify-center">
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
            width={980}
            height={600}
            src={"/assets/designed-for-everyone.jpg"}
            alt="designed-for-everyone"
            className="            
              lg:w-[54%]
              md:w-[273px]
              md:h-[600px]
              h-[400px]
              object-cover
              object-bottom
            "
        />
      </section>  */}
    </main>
  )
}
