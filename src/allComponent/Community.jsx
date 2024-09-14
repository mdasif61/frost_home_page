import c1 from '../assets/c1.png';
import c2 from '../assets/c2.png';
import c3 from '../assets/c3.png';

const communitys = [
    { id: "0", name: "RCTL Community", quantity: "+2", title: "Hey Who Wants To Play......", img: c1 },
    { id: "1", name: "Game Room", quantity: "+2", title: "GG Guys It Was Nice To Play W.....", img: c2 },
    { id: "2", name: "Retro Games", quantity: "+1", title: "Hey Who Wants To Play......", img: c3 },
]

const Community = () => {
    return (
        <div className="bg-gradient-to-b from-[#282A37] to-[#161A19] h-[279px] w-full rounded-2xl pr-6 mt-6 pt-6 flex flex-col">
            <div className='flex items-center px-6 justify-between'>
                <h1 className="text-[16px] text-white font-medium">Community’s</h1>
                <h1 className="text-white">All</h1>
            </div>
            <div className='space-y-4 pl-6 pt-6 w-full overflow-y-scroll customScrollbar'>
                {
                    communitys.map(({ id, img, name, title, quantity }) => (
                        <div key={id} className='flex items-center relative'>
                            <div className='z-50'>
                                <div className='absolute w-7 h-7 rounded-full bg-[#ED5B4E] -left-3 flex items-center justify-center -top-3'>
                                    <h1 className='text-white'>{quantity}</h1>
                                </div>
                                <img className='w-[57px] h-[57px]' src={img} alt="" />
                            </div>
                            <div className='ml-2'>
                                <h1 className='text-white text-[16px] font-medium'>{name}</h1>
                                <p className='text-[#FFFFFF99] text-[16px] font-medium w-44 leading-5'>{title}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Community;