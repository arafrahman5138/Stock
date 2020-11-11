import React from 'react'
import './Populate.css'


class Populate extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 1
      };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
   }
    reset() {
      this.setState({
        count: 1
      });
    }
    increment() {
      this.setState(state => ({
        count: state.count + 1
      }));
      
    }
    decrement() {
      this.setState(state => ({
        count: state.count - 1
      }));
    }
    render() {
      return (
        <div>
          <button className='inc' onClick={this.increment}>Next Page</button>
          <button className='dec' onClick={this.decrement}>Previous Page</button>
          <button className='reset' onClick={this.reset}>Reset Progress</button>
          <h1>Current Page: {this.state.count}</h1>
        </div>
      );
    }
  };

  export default Populate;