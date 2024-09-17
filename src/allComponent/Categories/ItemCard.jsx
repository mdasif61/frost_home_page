import Card from '@/reuseable/Card';
import card1 from '../../assets/card01.png';
import card2 from '../../assets/card2.png';
import card3 from '../../assets/card3.png';

const cardInfo=[
    {id:"1",title:"Rocket League", desc:"Lorem ipsum dolor sit amet consectetur. Parturient interdum cras volutpat porta aliquet nec pulvinar sit diam. Suspendisse sodales id sed tortor eu.", ratings:4.5, img:card1},
    {id:"2",title:"Child Of Light", desc:"Lorem ipsum dolor sit amet consectetur. Parturient interdum cras volutpat porta aliquet nec pulvinar sit diam. Suspendisse sodales id sed tortor eu.", ratings:4.5, img:card2},
    {id:"3",title:"You", desc:"Lorem ipsum dolor sit amet consectetur. Parturient interdum cras volutpat porta aliquet nec pulvinar sit diam. Suspendisse sodales id sed tortor eu.", ratings:4.5, img:card3},
    {id:"4",title:"Rocket League", desc:"Lorem ipsum dolor sit amet consectetur. Parturient interdum cras volutpat porta aliquet nec pulvinar sit diam. Suspendisse sodales id sed tortor eu.", ratings:4.5, img:card1},
    {id:"5",title:"Child Of Light", desc:"Lorem ipsum dolor sit amet consectetur. Parturient interdum cras volutpat porta aliquet nec pulvinar sit diam. Suspendisse sodales id sed tortor eu.", ratings:4.5, img:card2},
    {id:"6",title:"You", desc:"Lorem ipsum dolor sit amet consectetur. Parturient interdum cras volutpat porta aliquet nec pulvinar sit diam. Suspendisse sodales id sed tortor eu.", ratings:4.5, img:card3},
    {id:"4",title:"Rocket League", desc:"Lorem ipsum dolor sit amet consectetur. Parturient interdum cras volutpat porta aliquet nec pulvinar sit diam. Suspendisse sodales id sed tortor eu.", ratings:4.5, img:card1},
    {id:"5",title:"Child Of Light", desc:"Lorem ipsum dolor sit amet consectetur. Parturient interdum cras volutpat porta aliquet nec pulvinar sit diam. Suspendisse sodales id sed tortor eu.", ratings:4.5, img:card2},
    {id:"6",title:"You", desc:"Lorem ipsum dolor sit amet consectetur. Parturient interdum cras volutpat porta aliquet nec pulvinar sit diam. Suspendisse sodales id sed tortor eu.", ratings:4.5, img:card3},
]

const ItemCard = () => {
    return (
        <div>
            <Card
            cardInfo={cardInfo}
            ></Card>
        </div>
    );
};

export default ItemCard;