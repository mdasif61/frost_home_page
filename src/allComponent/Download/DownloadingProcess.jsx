import { StretchVertical, X } from "lucide-react";
import img01 from "../../assets/download 01.jpg";
import img02 from "../../assets/download 02.png";
import img03 from "../../assets/download 03.jpg";

const downloadingItem = [
  {
    img: img01,
    name: "Red Dead Redemption",
    dpercent: 59,
    outOfDPercent: "43.5 Gb/65.4 Gb",
    dRemain: "58:34",
  },
];

const upNextItem = [
  {
    img: img02,
    name: "EA Sports Fc 24",
    dpercent: 26,
    outOfDPercent: "6.5 Gb/34.4 Gb ",
    dRemain: "",
  },
];

const unScheduledItem = [
  {
    img: img03,
    name: "Cyberpunk 2077",
    dpercent: 26,
    outOfDPercent: "32.3 Gb/96.4 Gb",
    dRemain: "",
  },
];

const DownloadingProcess = () => {
  return (
    <div className="flex flex-col w-full">
      {downloadingItem?.map((item) => (
        <div key={item.name} className="flex w-full items-center">
          <div className="w-[269px]">
            <img className="rounded-lg w-full" src={item.img} alt="" />
          </div>
          <div className="flex-1 px-6">
            <h1 className="text-white text-[16px]">{item.name}</h1>
            <div className="space-y-2">
              <p className="text-end text-white">
                {item.dRemain}{" "}
                <span className="text-[#FFFFFF99]">Remaining</span>
              </p>
              <div className="bg-[#595858] h-[3px] relative rounded-lg w-full overflow-clip">
                <div
                  className={`absolute h-full bg-[#ED5B4E] rounded-lg w-[${
                    item.dpercent + "%"
                  }]`}
                ></div>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[#FFFFFF99]">
                  <span>Downloading</span> {item.dpercent}%
                </p>
                <p className="text-[#FFFFFF99]">{item.outOfDPercent}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center space-x-2 mt-4">
            <button className="h-8 w-8 rounded-md text-white flex items-center justify-center bg-[#ED5B4E]">
              <StretchVertical className="w-4" />
            </button>
            <button className="text-[#FFFFFF99]">
              <X className="w-5" />
            </button>
          </div>
        </div>
      ))}

      {/* line start */}
      <div className="flex items-center justify-between mt-6 mb-4 w-full">
        <h1 className="text-white min-w-fit">
          Up Next
          <span className="text-[#FFFFFF80]"> ({upNextItem.length})</span>
        </h1>
        <div className="bg-[#FFFFFF80] h-[1px] w-full ml-2">{/* line */}</div>
      </div>
      {/* line end */}

      {upNextItem?.map((item) => (
        <div key={item.name} className="flex w-full items-center">
          <div className="w-[269px]">
            <img className="rounded-lg w-full" src={item.img} alt="" />
          </div>
          <div className="flex-1 px-6">
            <h1 className="text-white text-[16px] mb-6">{item.name}</h1>
            <div className="space-y-2">
              <div className="bg-[#595858] h-[3px] relative rounded-lg w-full overflow-clip">
                <div
                  className={`absolute h-full bg-[#ED5B4E] rounded-lg w-[${
                    item.dpercent + "%"
                  }]`}
                ></div>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[#FFFFFF99]">
                  <span>Downloading</span> {item.dpercent}%
                </p>
                <p className="text-[#FFFFFF99]">{item.outOfDPercent}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center space-x-2 mt-4">
            <button className="h-8 w-8 rounded-md text-white flex items-center justify-center bg-[#ED5B4E]">
              <StretchVertical className="w-4" />
            </button>
            <button className="text-[#FFFFFF99]">
              <X className="w-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DownloadingProcess;
