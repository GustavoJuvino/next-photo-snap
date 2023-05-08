import Image from "next/image"
import Button from "./Button"

let headerItems = ["STORIES", "FEATURES", "PRICING"];

const Header = () => {
  return (
    <div className="flex justify-between mt-7 ml-40 mr-40 items-center">
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
        <ul 
          className="flex font-bold tracking-widest text-sm">
            {headerItems.map((item) => (
              <li className="hover:text-light-gray mx-6 cursor-pointer duration-300">
                {item}
              </li>
            ))}
        </ul>
      <Button
        type={1}
        value="GET AN INVITE"
        background={true}
      />
    </div>
  )
}

export default Header