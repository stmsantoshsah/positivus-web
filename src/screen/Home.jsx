import React from 'react'
import Icon from '../icons/SvgIcons'
import Hero from '../components/Hero'
import LogoCarousel from '../components/LogoCarousel'
import BannerImg from '../assets/Illustration.png'
import Services from '../components/Services'
import Accordion from '../components/Accordian'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
function Home() {
  return (
    <div>
      <Hero title="Navigating the digital landscape for success" description="Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation." image={BannerImg} buttonText="Book a consultation" />
      <LogoCarousel/>
      <Services/>
      <Accordion/>
      <ContactUs/>
      <Footer/>

    </div>
  )
}

export default Home
