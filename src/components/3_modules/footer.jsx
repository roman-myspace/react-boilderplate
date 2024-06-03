import dayjs from 'dayjs'
import React from 'react'


export default function Footer() {


    return (
        <footer className='mytheme__footer'>
            <p>Copyright&copy; {dayjs().format("YYYY")}, All Rights Reserved. </p>
        </footer>
    )
}
