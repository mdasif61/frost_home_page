import img01 from '../../assets/download 01.jpg';
import img02 from '../../assets/download 02.png';
import img03 from '../../assets/download 03.jpg';

const downloadingItem=[
    {img:img01, name:"Red Dead Redemption", dpercent:"Downloading 59%", outOfDPercent:"43.5 Gb/65.4 Gb", dRemain:"58:34 Remaining"},
    {img:img02, name:"EA Sports Fc 24", dpercent:"Next 26%", outOfDPercent:"6.5 Gb/34.4 Gb ", dRemain:""},
    {img:img03, name:"Cyberpunk 2077", dpercent:"26%", outOfDPercent:"32.3 Gb/96.4 Gb", dRemain:""},
]

const DownloadingProcess = () => {
    return (
        <div className='flex flex-col'>
            {downloadingItem?.map((item)=>(
                <div className='flex'>
                <div>
                    <img className='w-[269px] rounded-lg' src={item.img} alt="" />
                </div>
                <div>
                    <h1>{}</h1>
                </div>
                </div>
            ))}
        </div>
    );
};

export default DownloadingProcess;