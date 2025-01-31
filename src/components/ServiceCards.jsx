import React from 'react'
import cardone from '../assets/cardone.png'
import cardTwo from '../assets/cardtwo.png'
import cardThree from '../assets/card3.png'
import cardFour from '../assets/card4.png'
import cardFive from '../assets/card5.png'
import cardSix from '../assets/card6.png'
const cardDetails = [
    {
        cardTitle: 'Search engine optimization',
        buttonText: 'Learn more',
        cardImage: cardone,
    },
    {
        cardTitle: 'Search engine optimization',
        buttonText: 'Learn more',
        cardImage: cardTwo,
    }, {
        cardTitle: 'Search engine optimization',
        buttonText: 'Learn more',
        cardImage: cardThree,
    }, {
        cardTitle: 'Search engine optimization',
        buttonText: 'Learn more',
        cardImage: cardFour,
    },
    {
        cardTitle: 'Search engine optimization',
        buttonText: 'Learn more',
        cardImage: cardFive,
    },
    {
        cardTitle: 'Search engine optimization',
        buttonText: 'Learn more',
        cardImage: cardSix,
    }
]
function ServiceCards() {
    return (
        <div className='cardItems flex flex-wrap gap-[40px] my-[70px]'>
            {
                cardDetails.map((item,index) => (
                    <div key={index} className='cardItem bg-[#F3F3F3] p-[50px] min-w-[calc(50%-20px)] flex rounded-[45px] justify-between'>
                        <div className='flex h-full flex-col justify-between'>
                            <h3 className='text-3xl max-w-[200px] p-2'>{item.cardTitle}</h3>
                            <button className='text-left'>{item.buttonText}</button>
                        </div>
                        <div>
                            <img src={item.cardImage} alt="" />
                        </div>
                    </div>
                ))
            }
            </div>
    )
}

export default ServiceCards
