import React, { Component } from 'react'

/**
 * @class Description
 * @prop {string} className - Css class
 * @prop {string} text - Description content
 */
export default class Description extends Component {
    constructor(props) {
        super(props)
        this.descriptRef = React.createRef();
        this.state = {
            hidden: true,
        }
    }

    /**
     * @method showHideText - Toggle the description viewing
     * @returns void
     */
    showHideText() {
        const description = this.descriptRef.current.classList

        if (description.contains('show')) {
            description.remove('show')
            description.add('hide')
        } else {
            description.add('show')
            description.remove('hide')
        }
    }

    render() {
        const showHideClass = this.state.hidden ? 'hide' : 'show'
        let description;
        let trigger

        description = <p className={`text ${showHideClass}`} ref={this.descriptRef}>{this.props.text}</p>
        trigger = <span className="trigger" onClick={this.showHideText.bind(this)}>{this.props.text && 'Description'}</span>

        return (
            <div className={ `${this.props.className || ''} description` }>
                {trigger}
                {description}
            </div>
        )
    }
}