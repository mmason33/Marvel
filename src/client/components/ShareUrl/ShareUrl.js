import React, { Component } from 'react'

/**
 * @class ShareUrl
 * @prop {string} className - Css class
 * @prop {string} inputClassName - Input css class
 * @prop {string} value - Input field value
 */
export default class ShareUrl extends Component {

    /**
     * @method onFocus - Input on focus handler
     * @returns void
     */
    onFocus() {
        const shareWrapper = document.querySelector('.share-url')
        const input = shareWrapper.querySelector('.input')
        input.select()
        document.execCommand('copy')
    }

    render() {
        return (
            <div className={ `${this.props.className || ''} share-url`}>
                <span className="message">Click to copy url to clipboard</span>
                <input className={ `${this.props.inputClassName || ''} input`} value={this.props.value} onFocus={this.onFocus} readOnly={true}/>
            </div>
        )
    }
}