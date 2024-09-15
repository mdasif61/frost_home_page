import Button from "./Button";

const Banner = ({heading,btnText,price,purchaseBtn,addToCart,img}) => {
  return (
    <div className="bg-gradient-to-b h-[351.35px] relative rounded-xl px-4 py-6 from-[#282A37] to-[#161A19] flex">

      {/* feather circle start */}
      <div className="overflow-clip h-full w-full absolute left-0 top-0 rounded-xl">
        <div className="w-36 h-36 absolute -right-32 -top-16 blur-3xl bg-[#ED5B4E] rounded-full"></div>

        <div className="w-36 h-36 absolute -left-8 -top-20 blur-3xl bg-[#ED5B4E] rounded-full"></div>

        <div className="w-36 h-36 absolute -left-8 -bottom-24 blur-3xl bg-[#ED5B4E] rounded-full"></div>
      </div>
      {/* featehr circle end */}

      <div className="w-1/2 flex flex-col justify-between">
        <Button>{btnText}</Button>
        <div>
          <h1 className="text-white font-bold text-4xl">
            {heading}
          </h1>
        </div>
        <div>
          <p className="text-[#ED5B4E] text-2xl mb-3">${price}</p>
          <div className="w-64 h-20 bg-[#FFFFFF0D] rounded-lg px-4 py-2 flex items-center justify-between">
            <button className="bg-[#ED5B4E] w-[122px] h-[59px] text-lg rounded-xl text-white font-semibold">
              {purchaseBtn}
            </button>
            <span className="text-[#ED5B4E] text-[16px] font-semibold">
              {addToCart}
            </span>
          </div>
        </div>
      </div>
      <div className="w-1/2 z-50 relative">
        <img className="absolute -bottom-6" src={img} alt="shotterMan" />
      </div>
    </div>
  );
};

export default Banner;
