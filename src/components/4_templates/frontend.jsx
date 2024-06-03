import React from 'react'
import Header from '../3_modules/header'
import Footer from '../3_modules/footer'

export default function FrontendLayout({ children }) {
    return (
        <main className=''>
            <Header />
            {children}
            <Footer />
        </main>
    )
}
