import Container from "../container";
import SideBar from "../SideBar";

const Home = () => {
  return (
    <Container>
      <div className="flex">
        <div className="w-[240px] min-h-[1024px]">
          <SideBar />
        </div>
        <div>main</div>
        <div>others</div>
      </div>
    </Container>
  );
};

export default Home;
