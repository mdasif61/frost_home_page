import { CardCarousel } from "@/components/cnCompo/CardCarousel";

const Suggestions = () => {
  return (
    <div className="w-full mt-4">
      <div className="flex items-center justify-between">
        <h1 className="text-white text-2xl mb-0">Suggestions</h1>
        <h1 className="text-white text-lg pr-6">All</h1>
      </div>
      <div className="mt-2 w-full px-8">
        <div className="w-full">
          <CardCarousel></CardCarousel>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
