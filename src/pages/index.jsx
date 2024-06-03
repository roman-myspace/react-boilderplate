import React from 'react'
import { nFormatter } from '../@utils/helpers'
import ButtonGroup from '../components/2_widgets/button-group'

export default function Home() {
    return (
        <div>
            <p>Home</p>
            <p>{nFormatter(12500, 2)}</p>
            <ButtonGroup
                data={[
                    { label: "Item 1", onClick: () => alert("Item 1 Clicked!") },
                    { label: "Item 2", onClick: () => alert("Item 2 Clicked!") },
                    { label: "Item 3", onClick: () => alert("Item 3 Clicked!") },
                    { label: "Item 4", onClick: () => alert("Item 4 Clicked!") },
                ]}
            />
        </div>
    )
}
