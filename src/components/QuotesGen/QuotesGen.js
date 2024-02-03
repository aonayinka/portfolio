import React, { Component } from 'react';
import './QuotesGen.css';
import axios from 'axios';

class QuotesGen extends Component {
  state = {
    advice: '',
    error: '',
    rating: null,
  };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice, error: '', rating: null });
      })
      .catch((error) => {
        console.error('Error fetching advice:', error);
        this.setState({ error: 'Failed to fetch advice. Please try again.', rating: null });
      });
  };

  handleRatingChange = (rating) => {
    this.setState({ rating });
  };

  render() {
    const { advice, error, rating } = this.state;
    return (
      <div className='quotesGen'>
        <div className="card">
          {error ? (
            <p className='error'>{error}</p>
          ) : (
            <>
              <h1 className='heading'>{advice}</h1>
              <StarRating rating={rating} onRatingChange={this.handleRatingChange} />
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

const Star = ({ selected = false, onClick }) => (
  <span className="star" onClick={onClick}>
    {selected ? "★" : "☆"}
  </span>
);

class StarRating extends React.Component {
  render() {
    const { totalStars, rating, onRatingChange } = this.props;
    return (
      <div className="star-rating">
        {[...Array(totalStars)].map((n, i) => (
          <Star
            key={i}
            selected={i < rating}
            onClick={() => onRatingChange(i + 1)}
          />
        ))}
      </div>
    );
  }
}

StarRating.defaultProps = {
  totalStars: 5,
};

export default QuotesGen;
