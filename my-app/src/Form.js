import React from 'react';
import './Form.css'

export class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: "",
            pass: ""
        };
        this.idChange = this.idChange.bind(this);
        this.passChange = this.passChange.bind(this);
    }

    idChange(e){
        this.setState({
            id: e.target.value
        });
    }

    passChange(e){
        this.setState({
            pass: e.target.value
        });
    }

    render(){
        return (
            <div>
                <br />
                <h1>Simple Form using React</h1>
                <div id="form">
                    <br />
                    <input type="text" value={this.state.id} onChange={this.idChange} />
                    <h2>Your ID is : {this.state.id}</h2>
                    <input type="password" value={this.state.pass} onChange={this.passChange} />
                    <h2>Your Password is : {this.state.pass}</h2>
                </div>
            </div>
        );
    }
}