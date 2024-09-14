import ql01 from "../assets/ql01.png";
import ql02 from "../assets/ql02.png";
import ql03 from "../assets/ql03.png";

const QuickLaunch = [
  {
    id: "1",
    img: ql01,
    text: "Assassins Creed Mirage",
    status: "Download",
    price: "70$",
  },
  { id: "2", img: ql02, text: "Brawlhalla", status: "Installed", price: "70$" },
  {
    id: "3",
    img: ql03,
    text: "Red Dead Redemption2 ",
    status: "Download",
    price: "free",
  },
];

const QlaunchFavoriteList = () => {
  return (
    <div className="lg:grid items-center md:flex flex-col md:space-y-0 space-y-4 grid-cols-8 md:gap-6 justify-between mt-3">
      <div className="col-span-3 h-auto bg-gradient-to-b from-[#282A37] to-[#161A19] py-6 px-4 md:rounded-2xl">
        <h1 className="text-white mb-5">Quick Launch</h1>
        <div className="space-y-3">
          {QuickLaunch.map(({ id, img, text }) => (
            <div key={id} className="flex items-center">
              <img className="w-[57px] h-[57px]" src={img} alt="" />
              <div className="ml-2">
                <h1 className="text-white text-sm font-semibold">{text}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="col-span-5 h-auto bg-gradient-to-b from-[#282A37] to-[#161A19] mt-0 py-6 px-6 md:rounded-2xl">
        <div className="flex items-center mb-5 justify-between">
          <h1 className="text-white">Favorite List</h1>
          <h1 className="text-white">All</h1>
        </div>
        <div className="space-y-3">
          {QuickLaunch.map(({ id, img, text, status, price }) => (
            <div key={id} className="flex items-center justify-between">
              <div className="flex items-center">
                <img className="w-[57px] h-[57px]" src={img} alt="" />
                <div className="ml-2">
                  <h1 className="text-white text-sm font-semibold">{text}</h1>
                  <span className="text-sm font-semibold text-[#FFFFFF99]">
                    {price}
                  </span>
                </div>
              </div>
              <div>
                <button className={`border-2 text-lg ${id==="2"?"text-[#FFFFFF99] border-[#FFFFFF99]":"text-[#ED5B4E] border-[#ED5B4E]"} py-2 px-3 w-28 rounded-2xl`}>
                  {status}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QlaunchFavoriteList;
