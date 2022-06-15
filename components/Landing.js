function Landing() {
  return (
    <div className="bg-[#d4e9e2] h-[60vh] md:h-[40vh] flex justify-center items-center flex-col md:flex-row md:justify-between tracking-wide font-three ">
      <div className="md:w-[50%]">
        <img src="https://bit.ly/3xpZRMb" alt="" width="100%" />
      </div>
      <div className="flex flex-col md:w-[50%] items-center text-center text-2xl px-10 space-y-3 text-green-800">
        <h1 className="lg:text-3xl">
          The new Starbucks® Summer Game: Road to Paradise is here.
        </h1>
        <button className="landingButtons border-green-800 text-lg lg:text-xl bg-white text-green-800 hover:bg-green-800 hover:text-white ">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Landing;
