import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="relative flex my-6 items-center overflow-clip bg-gradient-to-b from-[#282A37] to-[#161A19] rounded-2xl w-7/12 h-12">
      <Search className="z-50 ml-3 w-5 text-gray-300" />
      <input
        className="w-full text-gray-300 pr-4 pl-3 py-2 h-full bg-transparent border-none focus:outline-none"
        type="search"
        name=""
        id=""
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
