import notification from "../assets/notification.svg";
import bag from "../assets/Vbag.svg";
import topIcon from "../assets/topIcon.png";
import FriendsOnline from "./FriendsOnline";
import Community from "./Community";

const AsideItem = () => {
  return (
    <div className="w-full">
      <div className="my-6 flex items-center justify-end space-x-4 w-full">
        <button className="text-white relative flex items-center justify-center w-[57px] h-[57px] rounded-2xl bg-gradient-to-b from-[#282A37] to-[#161A19]">
          <span className="bg-[#ED5B4E] h-2 w-2 left-5 top-5 rounded-full absolute">
            {/* ellipse */}
          </span>
          <img src={notification} alt="notificaton" />
        </button>
        <button className="text-white flex items-center justify-center w-[57px] h-[57px] rounded-2xl bg-gradient-to-b from-[#282A37] to-[#161A19]">
          <img src={bag} alt="bag" />
        </button>
        <div>
          <img className="h-[57px] w-[57px]" src={topIcon} alt="topicon" />
        </div>
      </div>

      <div className="relative bg-gradient-to-b from-[#282A37] to-[#161A19] min-h-[102px] rounded-2xl px-5 py-4 flex justify-between">
        <div className="absolute bg-[#ED5B4E] rounded-full w-[59%] h-1 left-0 bottom-0 mx-5">
          {/* loaded bar */}
        </div>
        <div>
          <h1 className="text-white text-[16px] font-semibold">
            Red Dead Redemption 2<br /> Download
          </h1>
          <span className="text-[#FFFFFF80] text-sm">Remaining Time 1 Hour</span>
        </div>
        <h1 className="text-[#ED5B4E] font-semibold">59%</h1>
      </div>

      <div>
          <FriendsOnline></FriendsOnline>
          <Community></Community>
      </div>

    </div>
  );
};

export default AsideItem;
