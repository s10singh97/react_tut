import React, { Component } from 'react';
import { ScreenRow } from './ScreenRow';

export class Screen extends Component {

    render(){
        return(
            <div className="screen">
                <ScreenRow value={this.props.question}/>
                <ScreenRow value={this.props.answer}/>
            </div>
        );
    }
}