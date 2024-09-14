import FriendsOnline from "./FriendsOnline";
import Community from "./Community";

const AsideItem = () => {
  return (
    <div className="w-full">

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
