import React from 'react'

import { Container } from '@mui/material'
function Hero({title,description,image,buttonText}) {
  return (
    <section className='hero-section'>
      <Container maxWidth="lg">
        <div className="hero_content flex items-center py-[70px] gap-5">
          <div className="hero_left max-w-1/2">
            <h1 className='text-[60px] leading-[1.4]'>{title}</h1>
            <p className='text-xl leading-[1.3] my-8'>{description}</p>
            <button className='btn primary-btn'>{buttonText}</button>
          </div>
          <div className="hero_right max-w-1/2">
            <img src={image} alt="BannerImg" />
          </div>
        </div>
      </Container>

    </section>
  )
}

export default Hero
