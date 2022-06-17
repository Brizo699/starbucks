import React from "react";

function Content(props) {
  return (
    <div className="flex flex-col md:flex-row px-5 py-3 tracking-wide font-three w-full h-full bg-white shadow-md ">
      <div className="overflow-hidden ">
        <img
          className=" hover:scale-105 transition duration-200 
        "
          src={props.contentImg}
          alt=""
          width="100%"
          height="100%"
        />
      </div>
      <div className="space-y- mt-5 px-2 md:px-10 flex flex-col md:justify-center items-baseline w-full ">
        <h1 className="text-2xl pb-2 lg:text-3xl">{props.contentH1}</h1>
        <p className="text-sm lg:text-base text-[#6c6c6c] pb-3 ">
          {props.contentP1}
        </p>
        <p className="text-sm lg:text-base text-[#6c6c6c] mb-2 ">
          {props.contentP2}
        </p>
        <button className="text-base mt-5 previewButtons text-blue-400 border-blue-400 hover:bg-blue-400">
          {props.contentButtons}
        </button>
      </div>
    </div>
  );
}

export default Content;
