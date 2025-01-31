import React from 'react'
import ResponsiveAppBar from './ResponsiveAppBar'
import { Container } from '@mui/material'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <Container>
            <footer className='bg-[var(--secondary-color)] p-[50px] rounded-t-[45px]'>
                <ResponsiveAppBar />
                <div className='text-white flex gap-6 mt-[50px] border-t-2 pt-8'>
                    <p>© 2023 Positivus. All Rights Reserved.</p>
                    <Link to="/">Privacy Policy</Link>
                </div>
            </footer>
        </Container>
    )
}

export default Footer
