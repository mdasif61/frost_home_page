import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CardCarousel({carouselImages}) {
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-1">
        {carouselImages.map(({ img, text, time }, index) => (
          <CarouselItem key={index} className="pl-1 flex justify-center md:basis-1/2 lg:basis-1/3">
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
              <div className="flex items-center w-full mt-2 justify-between">
              <h1 className="font-semibold text-white text-[16px]">{text}</h1>
              <p className="text-gray-500 text-sm">{time}</p>
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
