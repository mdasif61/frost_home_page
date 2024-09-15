import Banner from '@/reuseable/Banner';
import libraryBannerImg from "../../assets/libraryImg.png"
import MostPlayedGames from './MostPlayedGames';
import FavoriteGames from './FavoriteGames';
import Action from './Action';



const Library = () => {
    return (
        <div>
            <Banner
                heading={<>Deadpool <br /> Game</>}
                btnText="New"
                price={69.99}
                purchaseBtn="Purchase"
                addToCart="Add To Cart"
                img={libraryBannerImg}
            ></Banner>
            <MostPlayedGames/>
            <FavoriteGames/>
            <Action/>
        </div>
    );
};

export default Library;