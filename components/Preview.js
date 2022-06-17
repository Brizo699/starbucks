import React from "react";

function Preview() {
  return (
    <div className=" grid md:grid-cols-2 w-full md:px-5 md:gap-6 px-5 font-three bg-[#efefef] pb-10 tracking-wide space-y-5 md:space-y-0 ">
      {/* 1 */}
      <div className="md:grid-cols-2 bg-white shadow-md overflow-hidden rounded-md ">
        <img
          className="hover:scale-105 transition duration-200 "
          src="https://bit.ly/3b1uhwD"
          alt=""
          width="100%"
        />
        <div className="px-4 py-5 ">
          <h1 className="text-xl mb-1">Menu</h1>
          <p className="text-sm text-[#6c6c6c]">
            Delicious and artisanal drinks. Unique and
          </p>
          <button className="previewButtons">Learn More</button>
        </div>
      </div>
      {/* 2 */}
      <div className="md:grid-cols-2 bg-white shadow-md overflow-hidden rounded-md ">
        <img
          className="hover:scale-105 transition duration-200 "
          src="https://bit.ly/3mJxCD1"
          alt=""
          width="100%"
        />
        <div className="px-4 py-5 ">
          <h1 className="text-xl mb-1">How to make the Perfect Coffee</h1>
          <p className="text-sm text-[#6c6c6c]">
            Discover the different methods you can use to prepare your perfect
            Starbucks® coffee at home.
          </p>
          <button className="previewButtons">Learn More</button>
        </div>
      </div>
      {/* 3 */}
      <div className="md:grid-cols-2 bg-white shadow-md overflow-hidden rounded-md ">
        <img
          className="hover:scale-105 transition duration-200 "
          src="https://bit.ly/3tyXDc9"
          alt=""
          width="100%"
        />
        <div className="px-4 py-5 ">
          <h1 className="text-xl mb-1">Starbucks® Stores</h1>
          <p className="text-sm text-[#6c6c6c]">
            Find your nearest Starbucks® store.
          </p>
          <button className="previewButtons">Learn More</button>
        </div>
      </div>
      {/* 4 */}
      <div className="md:grid-cols-2 bg-white shadow-md overflow-hidden rounded-md ">
        <img
          className="hover:scale-105 transition duration-200 "
          src="https://bit.ly/3NREn1G"
          alt=""
          width="100%"
        />
        <div className="px-4 py-5 ">
          <h1 className="text-xl mb-1">Starbucks App</h1>
          <p className="text-sm text-[#6c6c6c]">
            Save time with Click & Collect and accumulate your stars 🌟 Ordering
            has never been easier.
          </p>
          <button className="previewButtons">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Preview;
