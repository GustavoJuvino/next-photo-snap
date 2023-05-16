import Main from "./components/Main";
import Content from "./components/Content";
import Card from "./components/Card";
import Icons from "./components/Icons";
import { Suspense } from "react";

interface dataProps {
  id: number;
  title: string;
  author: string;
  date?: string;
  src: string;
}

async function getData() {
  const res = await fetch("http://localhost:3000/api/json", { next: { revalidate: 60 } });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
 
}

export default async function Home() {
  const data = await getData();
  const asyncComponent: JSX.Element = await Icons(3);

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
        absolute
        w-full
        grid
        lg:grid-cols-4
        grid-cols-2
      "
    >
      {data?.slice(0, 4).map((data: dataProps) => (
          <Card 
            key={data.id}
            title={data.title}
            author={data.author}
            imgSrc={data.src}
          />
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
