import ItemCard from "./ItemCard";
import TopMenu from "./TopMenu";

const Categories = () => {
    return (
        <div>
            <TopMenu />
            <div className="bg-gradient-to-b w-full rounded-2xl p-6 from-[#282A37] to-[#161A19]">
                <div className="overflow-y-scroll w-full max-h-[820px] scrollbar-thumb-[#ED5B4E] scrollbar-thin scrollbar-track-[#6A6A6A] ">
                    <ItemCard />
                </div>
            </div>
        </div>
    );
};

export default Categories;