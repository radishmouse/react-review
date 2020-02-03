import React from 'react';


class Counter extends React.Component {
    constructor(props) {
        // "register" Counter as a 
        // normal React.Component.
        super(props);
        // Use React.Component's constructor
        // to set up Counter to work
        // with React

        // this.state = {};
        // this.state.value = 1;
        this.state = {
            value: props.initialValue,
            // changeBy: props.changeBy,
        };
    }

    render() { 
        return (
            <div>
                <h1>{this.state.value}</h1>
                <button onClick={() => {
                    this.setState({
                        value: this.state.value + this.props.changeBy
                    });
                }}>+</button>
                <button onClick={() => {
                    this.setState({
                        value: this.state.value - this.props.changeBy
                    });
                }}>-</button>  
                <button onClick={() => {
                    this.setState({
                        value: this.props.initialValue
                    });
                }}>*</button>  
                                                           
            </div>
        );
    }
}


export default Counter;