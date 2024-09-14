import ahmed from '../assets/ahmed.png';
import moozee from '../assets/Moozee.png';
import joe from '../assets/Joe.png';
import benjaman from '../assets/Benjamen.png';
import arthur from '../assets/Arthur.png';
import '../CSS/style.css'


const friendOnline = [
    { id: "0", name: "Ahmed", title: "Brawlhalla", img: ahmed },
    { id: "1", name: "Moozee", title: "Apex Legends", img: moozee },
    { id: "2", name: "Joe", title: "Rocket League", img: joe },
    { id: "3", name: "Benjaman", title: "Warframe", img: benjaman },
    { id: "4", name: "Arthur", title: "Ghost Runner", img: arthur },
    { id: "5", name: "Morgan", title: "Warframe", img: benjaman },
]

const FriendsOnline = () => {
    return (
        <div className="bg-gradient-to-b from-[#282A37] to-[#161A19] h-[466px] w-full rounded-2xl mt-6 px-6 pt-6 flex flex-col">
            <div className='flex items-center justify-between'>
                <h1 className="text-[16px] text-white font-medium">Friends Online. <span className="text-[#FFFFFF] font-light"><span className="text-[#FFFFFF99]">6</span>/20</span></h1>
                <h1 className="text-white">All</h1>
            </div>
            <div className='space-y-4 mt-6 customScrollbar overflow-y-scroll'>
                {
                    friendOnline.map(({ id, img, name, title }) => (
                        <div key={id} className='flex items-center'>
                            <div>
                                <img src={img} alt="" />
                            </div>
                            <div className='ml-2'>
                                <h1 className='text-white text-[16px] font-medium'>{name}</h1>
                                <p className='text-[#FFFFFF99] text-[16px] font-medium'>{title}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default FriendsOnline;