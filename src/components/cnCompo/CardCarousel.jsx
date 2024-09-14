import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import carouselImg01 from "../../assets/carouselImg 01.jpg";
import carouselImg02 from "../../assets/carouselImg 02.jpg";
import carouselImg03 from "../../assets/carouselImg 03.jpg";

const carouselImages = [
  { img: carouselImg01, text: "Rocket League", time: "9Hrs" },
  { img: carouselImg02, text: "Call Of Duty Mw3", time: "9Hrs" },
  { img: carouselImg03, text: "Cyberpunk", time: "9Hrs" },
];

export function CardCarousel() {
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-1">
        {carouselImages.map(({ img, text, time }, index) => (
          <CarouselItem key={index} className="pl-1 flex justify-center md:basis-1/3 basis-1/2">
            <div className="p-1 md:w-[229px] w-auto">
              <Card>
                <CardContent className="flex md:h-[151px] h-auto items-center justify-center">
                  <img
                    className="object-cover h-full"
                    src={img}
                    alt={`carouselImg: ${index + 1}`}
                  />
                </CardContent>
              </Card>
              <div className="flex items-center w-full md:my-2 my-1 justify-between">
              <h1 className="md:font-semibold text-white md:text-lg text-sm">{text}</h1>
              <p className="text-gray-500 md:text-sm text-xs">{time}</p>
            </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
