import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CardCarousel({ carouselImages, except }) {
  return (
    <Carousel className="w-full">
      <CarouselContent except={except} className="-ml-1">
        {carouselImages.map(({ img, text, time }, index) => (
          <CarouselItem key={index} className={`pl-1 flex justify-center  ${except?"md:basis-1/6 pl-0 lg:basis-1/6":"md:basis-1/3 lg:basis-1/3"}`}>
            <div className={`p-1 w-[229px] ${except&&"p-0 space-x-4 w-full"}`}>
              <Card className={`${except && "hidden"}`}>
                <CardContent className="flex h-[151px] items-center justify-center">
                  <img
                    className={`object-cover h-full ${except && "hidden"}`}
                    src={img}
                    alt={`carouselImg: ${index + 1}`}
                  />
                </CardContent>
              </Card>
              <div className={`flex items-center ${except && "bg-gradient-to-b from-[#282A37] to-[#161A19] justify-center px-2 h-[51px] rounded-2xl py-4 mt-0 w-auto"} w-full mt-2`}>
                <h1 className="font-semibold text-white text-[16px]">{text}</h1>
                <p className={`text-gray-500 text-sm ${except && "hidden"}`}>{time}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className={`${except && "hidden"}`} />
      <CarouselNext className={`${except && "hidden"}`} />
    </Carousel>
  );
}
