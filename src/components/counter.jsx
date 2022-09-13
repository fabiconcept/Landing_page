import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={()=>this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm'>Increment</button>
                <button onClick={()=>this.props.onDecrement(this.props.counter)} className='btn ml-2 btn-sm'>Decrement</button>
                <button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDelete(this.props.counter.id)}>Delete </button>
            </div>
        );
    }   

    getBadgeClasses() {
        let classes = "badge m-2 p-2 badge";
        classes += (this.props.counter.value === 0) ? "-warning" : "-primary";
        return classes;
    }

    formatCount(){
        const {value: value} = this.props.counter;
        return  value === 0? '0' : value;
    }
}

export default Counter;