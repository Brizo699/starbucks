import { BsSearch } from "react-icons/Bs";
import { FiUser } from "react-icons/Fi";
import Link from "next/link";

function Header() {
  return (
    <header className="flex tracking-wide items-center px-4 py-2 font-one justify-between">
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
        <div className="space-x-3 pl-10 md:block hidden text-lg">
          <Link href="/signin">
            <a className="headerLink">Menu</a>
          </Link>
          <a className="headerLink" href="">
            Rewards
          </a>
          <a className="headerLink" href="">
            Gift Card
          </a>
          <a className=" headerLink" href="">
            Find a Store
          </a>
        </div>
      </span>
      {/* RIGHT */}
      <span className="flex items-center">
        <div className="sm:border-[0.5px] border-[#3b3b3b] items-center rounded-md px-[2px] py-[2px] sm:bg-white flex">
          <input
            type="text"
            className="tracking-wide outline-none px-2 hidden sm:flex"
            placeholder="Search"
          ></input>
          <div className="bg-gradient-to-bl sm:from-[#238e61] to-[#1a6e2f]  rounded-md p-1 hover:from-[#238e61]  hover:to-[#1a6e2f] group">
            <BsSearch className=" sm:text-white text-black text-2xl group-hover:text-white" />
          </div>
        </div>

        {/* FIX - Wrap the link over your div always and make links cursor pointer */}
        <Link href="/signin">
          <div className="bg-gradient-to-bl cursor-pointer rounded-lg px-1 py-1 mx-2 hover:from-[#238e61] hover:to-[#1a6e2f] transition duration-700 group">
            <FiUser className="text-2xl group-hover:text-white text-black" />
          </div>
        </Link>
      </span>
    </header>
  );
}
export default Header;
