import { Ellipsis, Gamepad2, User } from "lucide-react";
import image from "../../assets/rocket.jpg";

const Community = () => {
  const communityCard = [
    {
      image: image,
      name: "RDR 2 Community Hub",
      title: "Red Dead Redemption",
      members: 14.5,
    },
    {
      image: image,
      name: "RDR 2 Community Hub",
      title: "Red Dead Redemption",
      members: 14.5,
    },
    {
      image: image,
      name: "RDR 2 Community Hub",
      title: "Red Dead Redemption",
      members: 14.5,
    },
    {
      image: image,
      name: "RDR 2 Community Hub",
      title: "Red Dead Redemption",
      members: 14.5,
    },
  ];

  const moreCommunityInfo = [
    {
      image: image,
      name: "RDR 2 Community Hub",
      title: "Lorem Ipsum Dolor Sit Amet Consectetur.",
      desc: "Lorem ipsum dolor sit amet consectetur. Eros ullamcorper sit volutpat egestas vulputate blandit vestibulum. Cras volutpat sem nisi integer rhoncus a turpis quisque viverra. Facilisi scelerisque ultricies id pellentesque posuere augue molestie. Lobortis eu venenatis eu a maecenas sit. Ipsum a cursus sit sit mauris sagittis platea. In congue et neque nisl massa quis in rutrum sed. Varius egestas egestas nunc quis pharetra vitae vitae odio. Massa amet amet faucibus molestie pellentesque ut aliquet. Vel nec pretium ut orci felis urna tempus amet dui. Pulvinar mattis lobortis sagittis ornare ut ut pharetra. Semper eget cursus parturient proin eu ut scelerisque. Quam suspendisse nunc penatibus lectus diam orci quam lectus. Ut amet velit nulla nunc turpis fusce massa eget. Rhoncus condimentum nulla ac volutpat in placerat......",
      time: 2,
    },
    {
      image: image,
      name: "RDR 2 Community Hub",
      title: "Lorem Ipsum Dolor Sit Amet Consectetur.",
      desc: "Lorem ipsum dolor sit amet consectetur. Eros ullamcorper sit volutpat egestas vulputate blandit vestibulum. Cras volutpat sem nisi integer rhoncus a turpis quisque viverra. Facilisi scelerisque ultricies id pellentesque posuere augue molestie. Lobortis eu venenatis eu a maecenas sit. Ipsum a cursus sit sit mauris sagittis platea. In congue et neque nisl massa quis in rutrum sed. Varius egestas egestas nunc quis pharetra vitae vitae odio. Massa amet amet faucibus molestie pellentesque ut aliquet. Vel nec pretium ut orci felis urna tempus amet dui. Pulvinar mattis lobortis sagittis ornare ut ut pharetra. Semper eget cursus parturient proin eu ut scelerisque. Quam suspendisse nunc penatibus lectus diam orci quam lectus. Ut amet velit nulla nunc turpis fusce massa eget. Rhoncus condimentum nulla ac volutpat in placerat......",
      time: 2,
    },
  ];

  return (
    <div>
      <div className="text-white flex justify-between items-center">
        <h1 className="text-xl font-medium">Popular Community</h1>
        <h1 className="text-xl font-medium">All</h1>
      </div>

      <div className="grid grid-cols-2 gap-6 my-6">
        {communityCard.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-t from-[#161A19] to-[#282A37] px-4 py-6 rounded-2xl"
          >
            <div className="flex justify-between items-center">
              <div className="w-[57px] h-[57px] rounded-full overflow-clip">
                <img className="w-[57px]" src={item.image} alt="" />
              </div>
              <div className="flex-1 pl-3">
                <h1 className="text-white text-[16px] font-medium">
                  {item.name}
                </h1>
                <span className="text-[12px] flex text-[#FFFFFF99]">
                  <p className="flex">
                    <Gamepad2 className="text-[#ED5B4E] w-4 mr-1 h-4 bg-[#272936] rounded-full p-[2px]" />
                    {item.title}
                  </p>
                  <p className="pl-10 flex">
                    <User className="text-[#ED5B4E] w-4 mr-1 h-4 bg-[#272936] rounded-full p-[2px]" />{" "}
                    {item.members + " Members"}
                  </p>
                </span>
              </div>
              <button className="text-[#ED5B4E] font-medium text-[16px] border rounded-2xl border-[#ED5B4E] w-28 px-2 py-2">
                Join
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        {moreCommunityInfo.map((item, index) => (
          <div key={index}>
            <div className="flex items-center justify-between">
              <div className="h-[42px] w-[42px] rounded-full overflow-clip">
                <img src={item.image} alt="" />
              </div>
              <h1 className="text-[16px] ml-3 flex-1 font-medium text-white">
                {item.name}{" "}
                <span className="text-[#FFFFFF99] font-normal ml-1 text-[12px]">
                  {item.time} Hr.Ago
                </span>
              </h1>
              <button className="text-[#ED5B4E] font-medium text-[16px] border rounded-2xl border-[#ED5B4E] w-20 px-2 py-1">
                Join
              </button>
              <button className="text-white ml-6">
                <Ellipsis />
              </button>
            </div>
            <div className="mt-4">
              <h1 className="text-white font-medium text-[29px]">
                {item.title}
              </h1>
              <p className="text-[#FFFFFF99] text-[16px] leading-5">
                {item.desc}
              </p>
            </div>
            <hr className="my-16 border-[#FFFFFF59]"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
