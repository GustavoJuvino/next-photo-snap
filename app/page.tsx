import Button from "./components/Button";
import Gradient from "./components/Gradient";

export default async function Home() {

  return (
    <main>
      <section className="w-[38rem] h-[40rem] bg-black text-white">
        <div className="flex flex-col text-left pt-40 ml-40">
          <Gradient size="xl" />
          <h1 className="text-xxl text-light-gray mb-5">
            CREATE AND <br /> SHARE YOUR <br /> PHOTO STORIES.
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
      </section>
    </main>
  )
}
