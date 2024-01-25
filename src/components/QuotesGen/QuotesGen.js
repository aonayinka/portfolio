import React, { Component } from 'react';
import './QuotesGen.css';
import axios from 'axios';

class QuotesGen extends Component {
  state = {
    advice: '',
  };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice });
      })
      .catch((error) => {
        console.error('Error fetching advice:', error);
      });
  };

  render() {
    return (
      <div className='quotesGen'>
        <div className="card">
            <h1 className='heading'>{this.state.advice}</h1>
            <button className='button' onClick={this.fetchAdvice}>
                <span>New Advice!</span>
            </button>
        </div>
        
      </div>
    );
  }
}

export default QuotesGen;
