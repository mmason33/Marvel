import React from 'react'

/**
 * @function Title - Functional title component
 * @param {string} text - The title text
 * @param {string} className - Css class
 */
export const Title = ({ text, className }) => {
    return (
        <div className={ `${className || ''} title` }>
            { text }
        </div>
    )
}