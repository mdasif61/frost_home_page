import AsideItem from "@/allComponent/AsideItem";
import Container from "@/allComponent/Container";
import HeaderNav from "@/allComponent/shared/HeaderNav";
import SideBar from "@/allComponent/SideBar";
import { Outlet } from "react-router-dom";
// import SideBar from "../components/SideBar";
// import Container from "../components/container";

const Main = () => {
  return (
    <Container>
      <HeaderNav/>
      <div className="flex font-rubik">
        <div className="w-[240px] h-screen fixed">
          <SideBar></SideBar>
        </div>
        <div className="w-[816px] ml-[260px] min-h-[1024px] bg-black">
          <Outlet></Outlet>
        </div>
        <div className="w-[312px] px-6 flex-1">
          <AsideItem></AsideItem>
        </div>
      </div>
    </Container>
  );
};

export default Main;
