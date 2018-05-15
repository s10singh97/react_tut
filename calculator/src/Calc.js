import React from 'react';

const styles = {
    container: {
        marginLeft: "15%",
        width: "50%"
    },
    result: {
        background: "black"
    }
};

export class Calc extends React.Component(){
    constructor(props){
        super(props);
        this.state = {
            result: 0
        };
    }

    render(){
        return(
            <div id="container" style={styles.container}>
                <div id="result" >
                    {this.state.result}
                </div>
                <div>
                    
                </div>
            </div>
        );
    }
}