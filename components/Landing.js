function Landing() {
  return (
    <span className="flex h-[calc(100vh-250px)] relative justify-center font-three tracking-wide">
      <img
        className="h-full w-full object-cover"
        src="https://bit.ly/3tq0MLr"
      />
      <div className="absolute flex h-full w-full font-bold px-10 py-2 text-3xl text-white flex-col space-y">
        <h1 className="font-bold pt-4 text-3xl ">
          it's not just Coffee it's
          <a
            herf=""
            className="bg-clip-text text-transparent bg-gradient-to-bl from-[#238e61] to-[#036635] font-bold text-4xl ml-3 "
          >
            STARBUCKS
          </a>
        </h1>
        <div className="text-white font-normal font-one text-xl w-3/5">
          <p>
            We're working hard to put the health and well-being of ur partner
            and custmers first in all that we do.
          </p>
        </div>
      </div>
    </span>
  );
}

export default Landing;
