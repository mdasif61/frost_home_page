import AsideItem from "@/allComponent/AsideItem";
import Container from "@/allComponent/Container";
import SideBar from "@/allComponent/SideBar";
import HeaderNav from "@/allComponent/shared/HeaderNav";
import { Outlet } from "react-router-dom";
// import SideBar from "../components/SideBar";
// import Container from "../components/container";

const Main = () => {
  return (
    <Container>
      <HeaderNav />
      <div className="flex font-rubik">
        <div className={`h-screen hidden md:flex md:w-[200px] md:fixed sticky top-0 left-0`}>
          <SideBar></SideBar>
        </div>
        <div className="flex-1 md:ml-[224px] min-h-screen bg-black">
          <Outlet></Outlet>
        </div>
        {/* <div className="px-6 min-w-[312px] min-h-screen">
          <AsideItem></AsideItem>
        </div> */}
      </div>
    </Container>
  );
};

export default Main;
