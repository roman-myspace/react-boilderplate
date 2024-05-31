import React from 'react'
import { nFormatter } from '../@utils/helpers'

export default function Home() {
    return (
        <div>
            <p>Home</p>
            <p>{nFormatter(12500, 2)}</p>
        </div>
    )
}
