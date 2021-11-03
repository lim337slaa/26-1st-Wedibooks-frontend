import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class NewBook extends Component {
  render() {
    const { imgSrc, date } = this.props;

    return (
      <div className="bookNDesc">
        <Link to="/categories">
          <img className="eachBook" src={imgSrc} alt="child" />
          <p className="bookDesc">
            출간일 : <br /> {date}
          </p>
        </Link>
      </div>
    );
  }
}

export default NewBook;
