import React from "react";

function Form() {
  return (
    <form>
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
      <div>
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
      </div>

      <button className="bg-gradient-to-bl from-[#238e61] to-[#1a6e2f] w-full py-3 rounded-lg text-white  hover:opacity-90">
        Sign Up
      </button>
    </form>
  );
}

export default Form;
