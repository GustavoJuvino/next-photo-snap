import Image from "next/image";
import Button from "./Button";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

export let headerItems = ["stories", "features", "pricing"];

const Header = () => {
  return (
    <div className="
        flex
        justify-between
        mt-7
        lg:mx-40
        mobile:mx-10
        mx-2
        items-center
        z-20
      "
    >
        <div>
          <Link href="/">
            <Image
              src={"assets/logo.svg"}
              blurDataURL={"assets/logo.svg"}
              placeholder="blur"
              width={170}
              height={16}
              alt="Logo"
              className="mobile:w-auto w-[100px] h-auto cursor-pointer"
            />
          </Link>
        </div>
        <ul className="hidden md:flex font-bold tracking-widest text-sm">
          {headerItems.map((item) => (
            <Link key={item} href={`/${item}`} >
              <li className="
                  mx-6
                  cursor-pointer
                  duration-300
                  hover:text-light-gray
                "
              >
                {item.toUpperCase()}
              </li>
            </Link>
          ))}
        </ul>
      <Button
        type={1}
        value="GET AN INVITE"
        color="white"
        background="black"
        responsive="md"
      />
      
      <MobileMenu />
    </div>
  )
}

export default Header;