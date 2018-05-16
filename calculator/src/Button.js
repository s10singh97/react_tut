import React, { Component } from 'react';

export class Button extends Component {
    render(){
        return(
            <input type="button" className={this.props.type === 'action' ? 'button action-button' : 'button input-button'}
                onClick={this.props.handleClick} value={this.props.label} />
        );
    }
}