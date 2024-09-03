import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import Container from "../components/container";

const Main = () => {
  return (
    <Container>
      <div className="flex">
        <div className="w-[240px] min-h-[1024px] mr-5">
          <SideBar></SideBar>
        </div>
        <div className="w-[816px] min-h-[1024px] bg-black">
          <Outlet></Outlet>
        </div>
        <div>Others</div>
      </div>
    </Container>
  );
};

export default Main;
