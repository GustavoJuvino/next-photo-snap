import Image from "next/image"

const Header = () => {
  return (
    <div className="flex justify-between mt-7 ml-40 mr-40">
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
        <ul className="flex">
            <li className="mr-9">STORIES</li>
            <li className="mr-9">FEATURES</li>
            <li className="mr-9">PRICING</li>
        </ul>
        <button>GET AN INVITE</button>
    </div>
  )
}

export default Header