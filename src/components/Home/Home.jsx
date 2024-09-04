import Banner from "../Banner";
import SearchBar from "../SearchBar";
import Suggestions from "../Suggestions";

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
