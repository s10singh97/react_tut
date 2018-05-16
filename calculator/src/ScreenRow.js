import React, { Component } from 'react';

export class ScreenRow extends Component {
    render(){
        return(
            <div className="screen-row">
                <input type="text" readOnly value={this.props.value}/>
            </div>
        );
    }
}