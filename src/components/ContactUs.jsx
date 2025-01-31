import { Container } from '@mui/material'
import React from 'react'
import formIllustrationImg from '../assets/formIllustration.png'
import ContactForm from './ContactForm.jsx'
function ContactUs() {
    return (
        <Container className='gap-5'>
            <div className='bg-[#f3f3f3] flex items-center justify-between my-[70px] rounded-[45px] gap-10 overflow-hidden'>
            <ContactForm className=" "/>
                <div className='py-[60px] relative'><img src={formIllustrationImg} alt="formIllustrationImg" className='max-w-full' /></div>
            </div>
        </Container>
    )
}

export default ContactUs
