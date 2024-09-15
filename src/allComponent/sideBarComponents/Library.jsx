import Banner from '@/reuseable/Banner';
import React from 'react';
import libraryBannerImg from '../../assets/libraryImg.png'

const Library = () => {
    return (
        <div>
            <Banner
                heading={<>Deadpool <br/> Game</>}
                btnText="New"
                price={69.99}
                purchaseBtn="Purchase"
                addToCart="Add To Cart"
                img={libraryBannerImg}
            />
        </div>
    );
};

export default Library;