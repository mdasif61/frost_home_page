import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { ArrowDownToLine, House, LayoutDashboard, LibraryBig, Users } from "lucide-react";

const SideBar = () => {
  return (
    <div className="bg-gray-900 w-full h-full">
      <img src={logo} alt="logo" />
      <div>
        <ul className="space-y-2 ">
          <li><NavLink to='/' className={({isActive})=>isActive?"bg-[#ED5B4E] items-center flex py-3 px-4 rounded-xl text-white text-sm":"flex text-white items-center text-sm py-3 px-4"}><House className="mr-3"/> Home</NavLink></li>
          <li><NavLink to='/library' className={({isActive})=>isActive?"bg-[#ED5B4E] flex py-3 px-4 rounded-xl text-white text-sm items-center ":" items-center flex text-white text-sm py-3 px-4"}><LibraryBig className="mr-3"/> Library</NavLink></li>
          <li><NavLink to='/categories' className={({isActive})=>isActive?"bg-[#ED5B4E] flex py-3 px-4 rounded-xl text-white text-sm items-center ":" items-center flex text-white text-sm py-3 px-4"}><LayoutDashboard className="mr-3"/> Categories</NavLink></li>
          <li><NavLink to='/download' className={({isActive})=>isActive?"bg-[#ED5B4E] flex py-3 px-4 rounded-xl text-white text-sm items-center ":" items-center flex text-white text-sm py-3 px-4"}><ArrowDownToLine className="mr-3"/> Download</NavLink></li>
          <li><NavLink to='/community' className={({isActive})=>isActive?"bg-[#ED5B4E] flex py-3 px-4 rounded-xl text-white text-sm items-center ":" items-center flex text-white text-sm py-3 px-4"}><Users className="mr-3"/> Community</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
