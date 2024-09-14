import Banner from "../../allComponent/Banner";
import Suggestions from "../../allComponent/Suggestions";
import QlaunchFavoriteList from "../QlaunchFavoriteList";

const Home = () => {
  return (
    <div className="w-full h-full">
      <Banner/>
      <Suggestions/>
      <QlaunchFavoriteList/>
    </div>
  );
};

export default Home;
