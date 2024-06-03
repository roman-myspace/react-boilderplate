import React from 'react'

export default function Button({ label, onClick, className, ...otherProps }) {
    return (
        <button
            onClick={onClick}
            className={`mytheme__button ${className}`}
            {...otherProps}
        >{label}</button>
    )
}
