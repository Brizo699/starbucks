import Image from "next/image";
function Landing2() {
  return (
    <div className="flex flex-col bg-[#F06464] text-white font-three tracking-wide md:flex-row-reverse h-full w-full items-center justify-center ">
      <div className="md:w-[50%] overflow-hidden">
        <img
          className="w-full h-full object-contain hover:scale-105 transition duration-200"
          src="https://bit.ly/3HltGSH"
          alt=""
        />
      </div>
      <div className="text-center p-10 space-y-6 md:w-[50%]">
        <h1 className="text-3xl lg:text-5xl">Celebrate Everything Summer</h1>
        <p className="text-lg lg:text-xl">
          Embrace the rays with our new Chocolate Cream Cold Brew, Caramel
          Ribbon Crunch Frappuccino® blended beverage or Mango Dragonfruit
          Lemonade Starbucks Refreshers® beverage.
        </p>
        <button className="tracking-wide  rounded-full px-5 py-2 border-[1px] transition duration-100 border-red-800 text-red-800 hover:text-white hover:bg-red-800 bg-white lg:text-xl">
          Find your Favourite
        </button>
      </div>
    </div>
  );
}
export default Landing2;
