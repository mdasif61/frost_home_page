import Banner from "../../allComponent/Banner";
import SearchBar from "../../allComponent/SearchBar";
import Suggestions from "../../allComponent/Suggestions";

const Home = () => {
  return (
    <div className="w-full h-full">
      <SearchBar/>
      <Banner/>
      <Suggestions/>
    </div>
  );
};

export default Home;
