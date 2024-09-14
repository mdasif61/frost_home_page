import { Search } from "lucide-react";
import { useEffect, useState } from "react";

const SearchBar = () => {
  const [showInput, setShowInput] = useState(true)

  useEffect(()=>{
    const handleWindowSize=()=>{
      if(window.innerWidth<640){
        setShowInput(false)
      }else{
        setShowInput(true)
      }
    }
    window.addEventListener("resize", handleWindowSize);
    handleWindowSize();
    return ()=>window.removeEventListener("resize",handleWindowSize)
  },[])

  return (

    showInput ? <>
      <div className="relative flex items-center overflow-clip bg-gradient-to-b from-[#282A37] to-[#161A19] md:rounded-2xl rounded-md md:w-[441px] md:h-12 mx-2">
        <Search className="z-50 ml-3 w-5 text-gray-300" />
        <input
          className="w-full text-gray-300 pr-4 pl-3 py-2 h-full bg-transparent border-none focus:outline-none"
          type="search"
          name=""
          id=""
          placeholder="Search"
        />
      </div>
    </> : <div className="flex-1">
    <Search onClick={()=>setShowInput(true)} className="z-50 flex-1 ml-3 w-5 text-gray-300" />
    </div>

  );
};

export default SearchBar;
