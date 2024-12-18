import AsideItem from "@/allComponent/AsideItem";
import Container from "@/allComponent/Container";
import HeaderNav from "@/allComponent/shared/HeaderNav";
import SideBar from "@/allComponent/SideBar";
import { Outlet, useLocation } from "react-router-dom";

const Main = () => {

  const {pathname}=useLocation();

  return (
    <Container>
      <HeaderNav />
      <div className="flex font-rubik">
        <div className="h-screen z-50 flex w-[240px] fixed top-0 left-0">
          <SideBar></SideBar>
        </div>
        <div className={`w-[816px] ml-[260px] min-h-[1024px] bg-black ${["/categories", "/community"].includes(pathname)?"w-full pr-6":"w-[816px]"}`}>
          <Outlet></Outlet>
        </div>
        <div className={`w-[312px] px-6 flex-1 ${["/categories", "/community"].includes(pathname)?"hidden":""}`}>
          <AsideItem></AsideItem>
        </div>
      </div>
    </Container>
  );
};

export default Main;
