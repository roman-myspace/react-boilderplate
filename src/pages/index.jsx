import React from 'react'
import { nFormatter } from '../@utils/helpers'
import Button from '../components/1_elements/button'

export default function Home() {
    return (
        <div>
            <p>Home</p>
            <p>{nFormatter(12500, 2)}</p>
            <Button
                label={"Click Me!"}
                onClick={() => alert("Button Click Event!")}
            />
        </div>
    )
}
