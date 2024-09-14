import Banner from "../../allComponent/Banner";
import SearchBar from "../../allComponent/SearchBar";
import Suggestions from "../../allComponent/Suggestions";
import QlaunchFavoriteList from "../QlaunchFavoriteList";

const Home = () => {
  return (
    <div className="w-full h-full">
      {/* <SearchBar/> */}
      <Banner/>
      <Suggestions/>
      <QlaunchFavoriteList/>
    </div>
  );
};

export default Home;
