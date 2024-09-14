import { CardCarousel } from "@/components/cnCompo/CardCarousel";

const Suggestions = () => {
  return (
    <div className="w-full mt-6">
      <div className="flex items-center justify-between">
        <h1 className="text-white md:text-2xl mb-0 text-md">Suggestions</h1>
        <h1 className="text-white md:text-lg pr-6 text-sm">All</h1>
      </div>
      <div className="my-2 w-full px-8">
        <div className="w-full">
          <CardCarousel></CardCarousel>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
