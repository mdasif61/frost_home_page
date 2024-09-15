import { CardCarousel } from '@/reuseable/CardCarousel';
import carouselImg01 from "../../assets/brawlhalla.png";
import carouselImg02 from "../../assets/carouselImg 02.jpg";
import carouselImg03 from "../../assets/carouselImg 03.jpg";

const carouselImages = [
    { img: carouselImg01, text: "Rocket League", time: "9Hrs" },
    { img: carouselImg02, text: "Call Of Duty Mw3", time: "9Hrs" },
    { img: carouselImg03, text: "Cyberpunk", time: "9Hrs" },
];

const Action = () => {
    return (
        <div className="w-full mt-4">
            <div className="flex items-center justify-between">
                <h1 className="text-white text-2xl mb-0">Action</h1>
                <h1 className="text-white text-lg pr-6">All</h1>
            </div>
            <div className="mt-2 w-full px-8">
                <div className="w-full">
                    <CardCarousel
                        carouselImages={carouselImages}
                    ></CardCarousel>
                </div>
            </div>
        </div>
    );
};

export default Action;