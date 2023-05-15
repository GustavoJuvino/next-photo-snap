import Main from "./components/Main";
import Content from "./components/Content";
import Card from "./components/Card";

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

      <Card 
        title="The Mountains"
        author="John Applessed"
        imgSrc="/images/mountains.jpg"
      />
    </main>
  )
}
