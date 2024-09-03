import shotterMan from "../assets/man.png";

const Banner = () => {
  return (
    <div className="bg-gradient-to-b h-[351.35px] relative rounded-xl px-4 py-6 from-[#282A37] to-[#161A19] flex">
      {/* feather circle start */}
      {/* <div className="w-24 h-24 absolute bg-[#ED5B4E] rounded-full"></div> */}
      {/* featehr circle end */}

      <div className="w-1/2 flex flex-col justify-between">
        <button className="bg-[#ED5B4E] w-14 h-8 rounded-lg text-white font-semibold">
          New
        </button>
        <div>
          <h1 className="text-white font-bold text-4xl">
            Red Dead
            <br />
            Redemption
          </h1>
        </div>
        <div>
          <p className="text-[#ED5B4E] text-2xl mb-3">$69.99</p>
          <div className="w-64 h-20 bg-[#FFFFFF0D] rounded-lg px-4 py-2 flex items-center justify-between">
            <button className="bg-[#ED5B4E] w-[122px] h-[59px] text-lg rounded-xl text-white font-semibold">
              Purchase
            </button>
            <span className="text-[#ED5B4E] text-[16px] font-semibold">
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
