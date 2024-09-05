import ql01 from '../assets/ql01.png';
import ql02 from '../assets/ql02.png';
import ql03 from '../assets/ql03.png';

const QuickLaunch = [
    { id: "1", img: ql01, text: "Assassins Creed Mirage", status:"Download", price:"70$" },
    { id: "2", img: ql02, text: "Brawlhalla", status:"Installed", price:"70$" },
    { id: "3", img: ql03, text: "Red Dead Redemption2 ", status:"Download", price:"free" },
]

const QlaunchFavoriteList = () => {
    return (
        <div className="flex justify-between mt-3">

            <div className="w-[283px] h-[279px] bg-gradient-to-b from-[#282A37] to-[#161A19] pt-6 px-4 rounded-2xl">
                <h1 className="text-white mb-5">Quick Launch</h1>
                <div className='space-y-3'>
                    {
                        QuickLaunch.map(({ id, img, text }) => (
                            <div className='flex items-center'>
                                <img className='w-[57px] h-[57px]' src={img} alt="" />
                                <div className='ml-2'>
                                    <h1 className='text-white text-sm'>{text}</h1>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="w-[509px] h-[279px] bg-gradient-to-b from-[#282A37] to-[#161A19] pt-6 px-6 rounded-2xl">
                <div className='flex items-center justify-between'>
                    <h1 className="text-white">Favorite List</h1>
                    <h1 className="text-white">All</h1>
                </div>
                <div>
                    {
                        QuickLaunch.map(({id,img,text})=>(
                            <div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default QlaunchFavoriteList;