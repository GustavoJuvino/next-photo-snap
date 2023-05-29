import Main from "./components/Main";
import Content from "./components/Content";
import Card from "./components/Card";
import Icons from "./components/Icons";
import { Suspense } from "react";

async function getData() {
  const res = await import("./api/json/route");
  return await (await res.GET()).json();
}

export default async function Home() {
  const data = await getData();
  const asyncComponent: JSX.Element = await Icons(3, "sm");

  return (
    <main>
      <Main 
        title="CREATE AND SHARE YOUR PHOTO STORIES."
        content="Photosnap is a platform for photographers and visual
        storytellers. We make it easy to share photos, tell
        stories and connect with others."
        gradientSize="xl"
        button={true}
        buttonValue="GET AN INVITE"
        imgSrc="/assets/create-and-share.jpg"
      />

      <Content 
        type={1}
        title="BEAUTIFUL STORIES EVERY TIME"
        content="We provide design templates to ensure your stories
        look terrific. Easily add photos, text, embed maps and
        media from other networks. Then share your story with everyone. 
        "
        imgSrc="/assets/beautiful-stories.jpg"
      />

      <Content 
        type={2}
        title="DESIGNED FOR EVERYONE"
        content="Photosnap can help you create stories that resonate
        with your audience.  Our tool is designed for
        photographers of all levels, brands, businesses you
        name it. 
        "
        imgSrc="/assets/designed-for-everyone.jpg"
      />

    <section className="
        w-full
        grid
        lg:grid-cols-4
        sm:grid-cols-2
      "
    >
      {data?.slice(0, 4).map((data: dataProps) => (
        <div key={data.id}
          className="                
            duration-300
            lg:hover:translate-y-[-6rem]
            hover:translate-y-[-20px]
          "
        >
          <Card 
            title={data.title}
            author={data.author}
            imgSrc={data.src}
          />
        </div>
      ))}
    </section>

    <section>
      <Suspense fallback={<>Loading...</>}>
        {asyncComponent}
      </Suspense>
    </section>
    </main>
  )
}
