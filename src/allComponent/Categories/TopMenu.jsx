import { CardCarousel } from "@/reuseable/CardCarousel";

const topMenuItem = [
    { img: "", text: "Free", time: "" },
    { img: "", text: "Action", time: "" },
    { img: "", text: "Survival", time: "" },
    { img: "", text: "Adventure", time: "" },
    { img: "", text: "Puzzle", time: "" },
    { img: "", text: "Strategy", time: "" },
    { img: "", text: "Others", time: "" },
];

const TopMenu = () => {
    return (
        <div className="mb-6">
            <CardCarousel
            except={true} 
            carouselImages={topMenuItem}
            ></CardCarousel>
        </div>
    );
};

export default TopMenu;