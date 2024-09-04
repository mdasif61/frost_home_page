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
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1 w-[229px]">
              <Card>
                <CardContent className="flex h-[151px] items-center justify-center">
                  <img
                    className="object-cover h-full"
                    src={img}
                    alt={`carouselImg: ${index + 1}`}
                  />
                </CardContent>
              </Card>
            </div>
            <div className="flex items-center w-full justify-between">
              <h1 className="font-bold text-white">{text}</h1>
              <p className="text-gray-500">{time}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
