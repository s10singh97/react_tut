import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Screen } from './Screen';
import { Button } from './Button';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        question: "",
        answer: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    const val = e.target.value;
    switch(val){
      case '=': {
                  const answer = eval(this.state.question).toString();
                  this.setState({
                    answer: answer
                  });
                  break;
      }

      case 'Cls': {
                this.setState({
                  answer: "",
                  question: ""
                });
                break;
      }

      default: {
        this.setState({
          question: this.state.question += val
        });
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Screen question = {this.state.question} answer = {this.state.answer} />
        <div className="button-row">
          <Button label={'1'} handleClick={this.handleClick} type='input' />
          <Button label={'2'} handleClick={this.handleClick} type='input' />
          <Button label={'3'} handleClick={this.handleClick} type='input' />
          <Button label={'4'} handleClick={this.handleClick} type='input' />
          <Button label={'-'} handleClick={this.handleClick} type='action' />
          <Button label={'+'} handleClick={this.handleClick} type='action' />
        </div>
        <div className="button-row">
          <Button label={'5'} handleClick={this.handleClick} type='input' />
          <Button label={'6'} handleClick={this.handleClick} type='input' />
          <Button label={'7'} handleClick={this.handleClick} type='input' />
          <Button label={'8'} handleClick={this.handleClick} type='input' />
          <Button label={'*'} handleClick={this.handleClick} type='action' />
          <Button label={'/'} handleClick={this.handleClick} type='action' />
        </div>
        <div className="button-row">
          <Button label={'9'} handleClick={this.handleClick} type='input' />
          <Button label={'.'} handleClick={this.handleClick} type='input' />
          <Button label={'0'} handleClick={this.handleClick} type='input' />
          <Button label={'Cls'} handleClick={this.handleClick} type='action' />
          <Button label={'='} handleClick={this.handleClick} type='action' />
        </div>
      </div>
    );
  }
}

export default App;
