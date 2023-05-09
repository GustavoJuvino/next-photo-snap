import Image from "next/image";
import Button from "./Button";
import MobileMenu from "./MobileMenu";

export let headerItems = ["STORIES", "FEATURES", "PRICING"];

const Header = () => {

  return (
    <div className="flex flex-wrap justify-between mt-7 mx-10 lg:mx-40 items-center">
        <div>
            <Image
                className="w-auto h-auto"
                src={"assets/logo.svg"}
                width={170}
                height={16}
                alt="Logo"
                priority={true}
            />
        </div>
        <ul className="hidden md:flex font-bold tracking-widest text-sm">
          {headerItems.map((item) => (
            <li className="hover:text-light-gray mx-6 cursor-pointer duration-300">
              {item}
            </li>
          ))}
        </ul>
      <Button
        type={1}
        value="GET AN INVITE"
        color="white"
        background={true}
        responsive="md"
      />
      
      <MobileMenu />
    </div>
  )
}

export default Header