import React from 'react';
import './DataDivs.css';
var NumberFormat = require('react-number-format');

const DataDivs = props => {
  return (
    <div>
      <div className="dollar-value">
        <h4>Favorites</h4>
      </div>
      <div className="coin-list">
        <div className="list-body">
          {Object.keys(props.coins).map((key) => (
            <div className="crypto-container">
              <img className="favorites-img" src={'https://www.cryptocompare.com' + props.coins[key].USD.IMAGEURL} alt={`${key} icon`} />
              <div className="favorites-name">
                {key}
              </div>
              <div className="favorites-price">
                <NumberFormat value={props.coins[key].USD.PRICE} displayType={'text'} decimalprecision={2} thousandSeparator={true} prefix={'$'} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DataDivs;