import React from 'react'
import ServiceCards from './ServiceCards'
import { Container } from '@mui/material'

function Services() {
  return (
    <Container>
     <div className='flex items-center gap-5 my-5'>
        <h2 className='bg-[#B9FF66] px-5 py-2 inline-block text-4xl font-semibold '> Services</h2>
        <p>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
     </div>
      <ServiceCards/>
    </Container>
  )
}

export default Services
