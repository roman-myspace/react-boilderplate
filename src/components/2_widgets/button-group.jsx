import React from 'react'
import Button from '../1_elements/button'

export default function ButtonGroup({
    data
}) {
    return (
        <div className='mytheme__button_group'>
            {
                data && data?.map((item, idx) =>
                    <Button
                        key={idx}
                        label={item.label}
                        onClick={item.onClick}
                        className={item?.className ?? ""}
                    />
                )
            }
        </div>
    )
}
