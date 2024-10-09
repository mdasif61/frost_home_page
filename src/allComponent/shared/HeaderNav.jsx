import SearchBar from '../SearchBar';
import notification from "../../assets/notification.svg";
import bag from "../../assets/Vbag.svg";
import topIcon from "../../assets/topIcon.png";
import AsideTopBar from './AsideTopBar';
import { useLocation } from 'react-router-dom';

const HeaderNav = () => {
    const location=useLocation();
    const {pathname}=location;
    return (
        <div className={`w-full ${pathname==="/download"&&"hidden"} sticky top-0 z-50 bg-black backdrop-blur-xl bg-opacity-50 flex py-6 pl-[260px] px-6 items-center justify-between`}>
           <SearchBar></SearchBar>
            <AsideTopBar
            notification={notification}
            bag={bag}
            topIcon={topIcon}
            ></AsideTopBar>
        </div>
    );
};

export default HeaderNav;