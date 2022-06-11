import { FcGoogle } from "react-icons/Fc";
import { AiFillFacebook } from "react-icons/Ai";
import { VscChevronDown } from "react-icons/vsc";
import { BsTwitter } from "react-icons/Bs";
import { BsFacebook } from "react-icons/Bs";
import { BsInstagram } from "react-icons/Bs";
import Head from "next/head";
import Image from "next/image";

function Signin() {
  return (
    <div className="flex overflow-y-auto font-three tracking-wide w-full">
      <Head>
        <title>Starbucks Sign In</title>
      </Head>
      {/* Image */}

      <span className="w-2/5 fixed">
        <img
          className="object-cover h-[100vh] md:block hidden"
          src="https://bit.ly/3Qe1SmY"
          alt=""
          width="100%"
        />
      </span>
      {/* Sign up */}
      <span className="md:ml-[40%] w-full h-full justify-center flex flex-col">
        <span className="flex  text-black flex-col space-y-4 py-5 px-10 ">
          <h1 className="text-green-700 font-medium text-4xl">Sign Up</h1>
          {/* Name */}
          <span className="flex space-x-3">
            <div className="space-y-2">
              <h1>First Name</h1>
              <input
                type="First Name"
                placeholder=""
                className="border-[1px] border-gray-300 py-1 outline-none w-full rounded-lg px-2"
              />
            </div>
            <div className="space-y-2">
              <h1>Last Name</h1>
              <input
                type="First Name"
                placeholder=""
                className="border-[1px] border-gray-300 py-1 outline-none w-full rounded-lg px-2"
              />
            </div>
          </span>
          {/* Email & passwords */}
          <span className="space-y-4">
            <div className="space-y-2">
              <h1>Email</h1>
              <input
                type="Email"
                placeholder=""
                className="border-[1px] border-gray-300 py-1 outline-none w-full rounded-lg px-2"
              />
            </div>
            <div className="space-y-2">
              <h1>Password</h1>
              <input
                type="password"
                placeholder=""
                className="border-[1px] border-gray-300 py-1 outline-none w-full rounded-lg px-2"
              />
            </div>
            <div className="space-y-2">
              <h1>Re-enter password</h1>
              <input
                type="password"
                placeholder=""
                className="border-[1px] border-gray-300 py-1 outline-none w-full rounded-lg px-2"
              />
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="" />
              <p className="px-2 text-sm">
                i've read and agree with Term of Service and our Privacy Policy
              </p>
            </div>
            {/* Sign up buttons */}
            <span className="flex justify-center flex-col items-center space-y-6 py-2 ">
              <button className="bg-gradient-to-bl from-[#238e61] to-[#1a6e2f] w-full py-3 rounded-lg text-white  hover:opacity-90">
                Sign Up
              </button>
              <h1>OR</h1>
              <div className="flex w-full space-x-2">
                <div className="flex items-center border-[1px] border-gray-300 rounded-lg px-2 w-full py-3 hover:bg-[#f5f5f5] transition duration-100 cursor-pointer">
                  <FcGoogle />
                  <button className="text-xs px-1 tracking-wide">
                    Sign up with Google
                  </button>
                </div>
                <div className="flex items-center border-[1px] border-gray-300 rounded-lg px-2 w-full hover:bg-[#f5f5f5] transition duration-100 cursor-pointer">
                  <AiFillFacebook />
                  <button className="text-xs px-1 tracking-wide">
                    Sign up with Facebook
                  </button>
                </div>
              </div>
            </span>
            {/* Sign in */}
            <span className="flex text-sm">
              <a href="">Already have an account?</a>
              <a
                href=""
                className=" text-transparent bg-clip-text bg-gradient-to-bl from-[#238e61] to-[#1a6e2f] px-2  hover:text-green-300 transition duration-100"
              >
                Sign in
              </a>
            </span>
          </span>
        </span>
      </span>
    </div>
  );
}

export default Signin;
