import shotterMan from "../assets/man.png";

const Banner = () => {
  return (
    <div className="bg-gradient-to-b md:h-[351.35px] h-auto relative md:rounded-xl px-4 py-6 from-[#282A37] to-[#161A19] flex">

      {/* feather circle start */}
      <div className="overflow-clip h-full w-full absolute left-0 top-0 md:rounded-xl">
        <div className="w-36 h-36 absolute -right-32 -top-16 blur-3xl bg-[#ED5B4E] rounded-full"></div>

        <div className="w-36 h-36 absolute -left-8 -top-20 blur-3xl bg-[#ED5B4E] rounded-full"></div>

        <div className="w-36 h-36 absolute -left-8 -bottom-24 blur-3xl bg-[#ED5B4E] rounded-full"></div>
      </div>
      {/* featehr circle end */}

      <div className="w-1/2 flex flex-col justify-between">
        <button className="bg-[#ED5B4E] md:w-14 w-10 md:h-8 h-6 md:rounded-lg text-white font-semibold text-sm md:text-base">
          New
        </button>
        <div className="mt-6">
          <h1 className="text-white font-bold md:text-4xl text-xl">
            Red Dead
            <br />
            Redemption
          </h1>
        </div>
        <div className="space-y-2 md:space-y-0">
          <p className="text-[#ED5B4E] md:text-2xl text-sm md:mb-3 -mb-2 mt-2">$69.99</p>
          <div className="md:w-64 md:h-20 bg-[#FFFFFF0D] md:rounded-lg md:px-4 md:py-2 flex items-center md:justify-between">
            <button className="bg-[#ED5B4E] md:w-[122px] w-20 h-8 md:h-[59px] md:text-lg text-sm md:rounded-xl text-white font-semibold">
              Purchase
            </button>
            <span className="text-[#ED5B4E] md:text-[16px] ml-4 md:ml-0 text-sm font-semibold">
              Add To Cart
            </span>
          </div>
        </div>
      </div>
      <div className="w-1/2 relative">
        <img className="absolute -bottom-6" src={shotterMan} alt="shotterMan" />
      </div>
    </div>
  );
};

export default Banner;
