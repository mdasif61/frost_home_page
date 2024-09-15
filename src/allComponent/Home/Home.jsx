import shotterMan from "../../assets/man.png";
import Banner from "@/reuseable/Banner";
import Suggestions from "../../allComponent/Suggestions";
import QlaunchFavoriteList from "../QlaunchFavoriteList";

const Home = () => {
  return (
    <div className="w-full h-full">
      <Banner
      heading={<>Red Dead<br/>Redemption</>}
      btnText={"New"}
      price={69.99}
      img={shotterMan}
      purchaseBtn={"Purchase"}
      addToCart={"Add To Cart"}
      ></Banner>
      <Suggestions/>
      <QlaunchFavoriteList/>
    </div>
  );
};

export default Home;
