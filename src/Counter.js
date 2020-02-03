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
            initialValue: props.value,
            // changeBy: props.changeBy,
        };
    }

    render() { 
        return (
            <div>
                <h1>{this.props.value}</h1>
                <button onClick={this.props.addHandler}>+</button>
                <button onClick={this.props.subtractHandler}>-</button>  
                <button onClick={this._resetValue}>*</button>                 
            </div>
        );
    }

    // Write helper functions as
    // arrow functions.
    // Arrow functions retain the
    // correct value of the `this` keyword
    _incrementValue = () => {
        const newVal = this.props.value + this.props.changeBy;
        this.props.clickHandler(this.props.index, newVal);
        // this.setState({
        //     value: this.state.value + this.props.changeBy
        // });
    }

    _decrementValue = () => {
        const newVal = this.props.value - this.props.changeBy;
        this.props.clickHandler(this.props.index, newVal);

        // this.setState({
        //     value: this.state.value - this.props.changeBy
        // });
    }

    _resetValue = () => {
        this.props.resetHandler(this.props.index, this.state.initialValue);        
        // this.setState({
        //     value: this.props.initialValue
        // });        
    }
}


export default Counter;