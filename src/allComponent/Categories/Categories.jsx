import ItemCard from "./ItemCard";
import TopMenu from "./TopMenu";

const Categories = () => {
    return (
        <div>
            <TopMenu/>
            <div className="w-full min-h-[820px] overflow-y-scroll  customScrollbar bg-gradient-to-b from-[#282A37] to-[#161A19] rounded-2xl p-6">
                <ItemCard/>
            </div>
        </div>
    );
};

export default Categories;