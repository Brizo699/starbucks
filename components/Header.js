import { BsSearch } from "react-icons/Bs";
import { RiUser3Line } from "react-icons/Ri";
import { MdLocationOn } from "react-icons/Md";
import Link from "next/link";

function Header() {
  return (
    <header className="flex tracking-wide items-center px-4 py-2 font-one justify-between sticky ">
      {/* LEFT */}
      <span className="flex items-center">
        <div className="flex items-center font-extrabold">
          <img className="h-14" src="https://bit.ly/3NxwVbR" />
          <a
            href=""
            className="bg-clip-text text-transparent bg-gradient-to-bl from-[#1bcb82] to-[#0e0e0e] font-semibold text-2xl ml-2 font-five"
          >
            STARBUCKS
          </a>
        </div>
        <div className="space-x-3 pl-10 lg:block hidden text-lg ">
          <Link href="/signin">
            <a className="headerLink">Menu</a>
          </Link>
          <a className="headerLink" href="">
            Rewards
          </a>
          <a className="headerLink" href="">
            Gift Card
          </a>
        </div>
      </span>
      {/* RIGHT */}
      <div className="flex">
        <div className="flex space-x-2 items-center  hover:text-green-800 ">
          <MdLocationOn className="text-2xl " />
          <a className="font-medium sm:flex hidden text-lg" href="">
            Find a Store
          </a>
        </div>
        {/* FIX - Wrap the link over your div always and make links cursor pointer */}
        <Link href="/signin">
          <div className="bg-gradient-to-bl cursor-pointer rounded-full p-1 mx-2 group hover:bg-gradient-to-bl hover:from-[#1bcb82] hover:to-[#0e0e0e] hover:text-white">
            <RiUser3Line className="text-2xl group-hover:text-white text-black " />
          </div>
        </Link>
      </div>
    </header>
  );
}
export default Header;
