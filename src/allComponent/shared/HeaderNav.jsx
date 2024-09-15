import SearchBar from '../SearchBar';
import notification from "../../assets/notification.svg";
import bag from "../../assets/Vbag.svg";
import topIcon from "../../assets/topIcon.png";

const HeaderNav = () => {
    return (
        <div className='w-full sticky top-0 z-50 bg-black backdrop-blur-xl bg-opacity-50 flex py-6 pl-[260px] px-6 items-center justify-between'>
            <SearchBar></SearchBar>
            <div>
                <div className="flex items-center justify-end md:space-x-4 space-x-1 w-full">
                    <div className="text-white relative shrink-0 flex items-center justify-center md:w-[57px] md:h-[57px] h-9 w-9 rounded-md md:rounded-2xl p-1 bg-gradient-to-b from-[#282A37] to-[#161A19]">
                        <button>
                            <span className="bg-[#ED5B4E] h-2 w-2 md:left-5 md:top-5 left-2 top-2 rounded-full absolute">
                                {/* ellipse */}
                            </span>
                            <img src={notification} alt="notificaton" />
                        </button>
                    </div>
                    <div className="text-white shrink-0 flex items-center justify-center md:w-[57px] md:h-[57px] h-9 w-9 p-1 rounded-md md:rounded-2xl bg-gradient-to-b from-[#282A37] to-[#161A19]">
                        <button>
                            <img src={bag} alt="bag" />
                        </button>
                    </div>
                    <div className="text-white shrink-0 flex items-center justify-center md:w-[57px] md:h-[57px] h-9 w-9 rounded-md md:rounded-2xl bg-gradient-to-b from-[#282A37] to-[#161A19]">
                        <img src={topIcon} alt="topicon" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderNav;