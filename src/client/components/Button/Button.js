import React from 'react'

export const Button = ({ clickHandler, buttonClassName, buttonText }) => {
    return (
        <button className={ `${buttonClassName || ''} button` } onClick={ clickHandler }>
            { buttonText }
        </button>
    )
}