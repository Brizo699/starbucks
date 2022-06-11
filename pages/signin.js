import { FcGoogle } from "react-icons/Fc";
import { AiFillFacebook } from "react-icons/Ai";
import { VscChevronDown } from "react-icons/vsc";
import { BsTwitter } from "react-icons/Bs";
import { BsFacebook } from "react-icons/Bs";
import { BsInstagram } from "react-icons/Bs";
import Head from "next/head";
import Image from "next/image";
import Form from "../components/Form";

function Signin() {
  return (
    <div className="flex overflow-y-auto items-center font-three tracking-wide w-full h-[calc(100vh-32px)]">
      <Head>
        <title>Starbucks Sign In</title>
      </Head>

      {/* Image */}
      <div className="w-2/5 h-full fixed md:block hidden">
        <Image src="https://bit.ly/3Qe1SmY" layout="fill" objectFit="cover" />
      </div>

      <div className="flex flex-col md:ml-[40%] flex-1 items-center justify-center">
        <Form />
        {/* Sign up */}
        <div className=" w-full h-full justify-center flex flex-col">
          <div className="flex  text-black flex-col space-y-4 py-5 px-10 ">
            {/* Email & passwords */}
            <div className="space-y-4">
              {/* Sign up buttons */}
              <div className="flex justify-center flex-col items-center space-y-6 py-2 ">
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
              </div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
