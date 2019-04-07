import React from 'react'

export const Title = ({ text, className }) => {
    return (
        <div className={ `${className || ''} title` }>
            { text }
        </div>
    )
}