import './App.css';
import React, { Component } from 'react';
import Navbar from './components/NavBar';
import Counters from "./components/counters";

class App extends Component {
  state = {
      counters: [
          {id: 1, value: 5},
          {id: 2, value: 0},
          {id: 3, value: 0},
          {id: 4, value: 0},
          {id: 5, value: 0}
      ]
  };

  constructor (){
    super();
    console.log('App - Constructor');
  } 

  handleReset = () =>{
      const counters = this.state.counters.map(c => {
          c.value = 0;
          return c;
      });
      this.setState({counters});
  }
  handleIncrement = counter=>{
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index]= {...counter};
      counters[index].value++;
      this.setState({counters});
  }
  
  handleDecrement = counter =>{
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index]= {...counter};
      if(counters[index].value > 0){
        counters[index].value--;
        this.setState({counters});
      }
  }

  handleDelete = (counterId)=>{
      const counters = this.state.counters.filter(c => c.id !==counterId);
      this.setState({counters});
  }
  render() { 
    return (
      <React.Fragment>
        <Navbar totalCounter ={this.state.counters.filter(c => (c.value > 0).length)} />
        <main className='container'>
          <Counters
            counter={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement = {this.handleDecrement}
            onDelete={this.handleDelete}/>
        </main> 
      </React.Fragment>
    );
  }
}
 

export default App;
