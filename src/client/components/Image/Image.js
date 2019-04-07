import React, { Component } from 'react'

/**
 * @class Image
 * @prop {string} imageSrc - Image url
 * @prop {string} className - Css class
 * @prop {function} onClick - The click handle for the image click event
 * @prop {string} altText - Alt text
 */
export class Image extends Component {
    render() {
        return (
            <img src={ this.props.imageSrc } className={ `${this.props.className || ''} image` } onClick={this.props.onClick} alt={this.props.altText} />
        )
    }
}