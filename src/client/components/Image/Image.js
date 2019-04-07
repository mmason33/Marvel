import React from 'react'

export const Image = ({ imageSrc, imageClassName }) => {
    return (
        <img src={ imageSrc } className={ `${imageClassName || ''} image` } />
    )
}