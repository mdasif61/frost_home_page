// import { useState } from "react";
import ReactStars from "react-rating-stars-component";

const Card = ({ cardInfo }) => {

    // const [rating, setRating] = useState(
    //     cardInfo.reduce((acc, item) => ({ ...acc, [item.id]: item.ratings }, {}))
    // )

    // const handleRatings = (newRating, itemId) => {
    //     setRating((prevRating) => ({ ...prevRating, [itemId]: newRating }))
    //     console.log(`Card ID: ${itemId}, New Rating: ${newRating}`)
    // }

    return (
        <div className="grid grid-cols-3 w-full">
            {
                cardInfo.map((item) => (
                    <div key={item.id} className="w-[343px] flex flex-col space-y-6 mb-8">
                        <div className="w-full">
                            <img src={item.img} alt="" />
                        </div>
                        <div>
                            <h1 className="text-white font-semibold text-3xl">{item.title}</h1>
                            <div className="flex items-center">
                                <ReactStars
                                    count={5}
                                    size={26}
                                    // onChange={(newRating)=>handleRatings(newRating,item.id)}
                                    activeColor="#ED5B4E"
                                    value={item.ratings}
                                    isHalf={true}
                                />
                                <span className="text-[#FFFFFF99] pl-2 text-base">{item.ratings}</span>
                            </div>
                            <p className="text-[#FFFFFF99] text-base leading-5 mt-4">{item.desc}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Card;