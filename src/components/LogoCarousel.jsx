import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container } from '@mui/material';
import Amazon from '../assets/amazon.png'
import Dribble from '../assets/dribble.png'
import Hubspot from '../assets/hubspot.png'
import Netflix from '../assets/netflix.png'
import Notion from '../assets/notion.png'
const LogoImg = [
    { image: Amazon, description: "lorem ipsum 1" },
    { image: Dribble, description: "lorem ipsum 2" },
    { image: Hubspot, description: "lorem ipsum 3" },
    { image: Netflix, description: "lorem ipsum 4" },
    { image: Notion, description: "lorem ipsum 5" }
]
function LogoCarousel() {
    var settings = {
        dots:false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    };
    return (
        <Container>
            <Slider {...settings} >
                {
                    LogoImg.map((item,index) => (
                        <div className='text-white' key={index}>
                            <img src={item.image} alt="Logoimage" />
                            {/* <h3>{item.description}</h3> */}
                        </div>
                    ))
                }

            </Slider>
        </Container>
    )
}

export default LogoCarousel
