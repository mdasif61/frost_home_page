import Container from "@/allComponent/Container";
import SideBar from "@/allComponent/SideBar";
import { Outlet } from "react-router-dom";
// import SideBar from "../components/SideBar";
// import Container from "../components/container";

const Main = () => {
  return (
    <Container>
      <div className="flex font-rubik">
        <div className="w-[240px] min-h-[1024px] fixed">
          <SideBar></SideBar>
        </div>
        <div className="w-[816px] ml-[260px] min-h-[1024px] bg-black">
          <Outlet></Outlet>
        </div>
        <div>Others</div>
      </div>
    </Container>
  );
};

export default Main;
