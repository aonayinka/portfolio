import React, { Component } from 'react';
import './QuotesGen.css';
import axios from 'axios';

class QuotesGen extends Component {
  state = {
    advice: '',
    error: '',
  };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice, error: '' });
      })
      .catch((error) => {
        console.error('Error fetching advice:', error);
        this.setState({ error: 'Failed to fetch advice. Please try again.' });
      });
  };

  render() {
    const { advice, error } = this.state;
    return (
      <div className='quotesGen'>
        <div className="card">
          {error ? (
            <p className='error'>{error}</p>
          ) : (
            <>
              <h1 className='heading'>{advice}</h1>
              <button className='button' onClick={this.fetchAdvice}>
                <span>New Advice!</span>
              </button>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default QuotesGen;
