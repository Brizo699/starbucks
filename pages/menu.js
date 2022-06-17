function Menu(props) {
  return (
    <div className="text-black  flex flex-col bg-white rounded-xl shadow-md pt-5">
      <div className="h-[150px] w-[150px] rounded-xl overflow-hidden flex flex-col">
        <img
          className="w-full h-full object-cover hover:scale-105 transition duration-200  "
          src="https://bit.ly/3OlYeG1"
        />
      </div>
      <div className="flex items-baseline flex-col px-3 pt-1 py-4 space-y-2 ">
        <h1 className="font-one tracking-wide text-lg">Caffee Americano</h1>
        <button className=" text-green-900 tracking-wide">
          {props.menuPrice}
        </button>
        <div className="flex items-center hover:bg-green-800 hover:text-white bg-black text-white rounded-xl px-2 py-2 group">
          <button className=" tracking-wide text-sm font-light">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
