import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class BestBook extends Component {
  render() {
    const { imgSrc, desc, rating } = this.props;

    return (
      <div className="bookNDesc">
        <Link to="/categories">
          <img className="eachBook" src={imgSrc} alt="child" />
          <p className="bookDesc">
            평점: {rating} <br />
            {desc}
          </p>
        </Link>
      </div>
    );
  }
}

export default BestBook;
