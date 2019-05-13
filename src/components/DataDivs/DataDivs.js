import React from 'react';
import './DataDivs.css';

const DataDivs = props => {
  let rows = props.coins.map(item => {
    return <CoinRow key = {
      item.id
    }
    coin = {
      item
    }
    />
  })

  return (
    <div className="coin-list">
        <div className="list-header">
            <div className="header-name">Name</div>
            <div className="header-amount">Amount</div>
            <div className="header-value">Value</div>
        </div>
        <div className="list-body">
            {rows}
        </div>
    </div>
  )
}
  
const CoinRow = (props) => {
  return (
      <div className="table-row">
          <div className="row-name">
              {props.coin.icon}{props.coin.name}
          </div>
          <div className="row-amount">
              {props.coin.amount}
          </div>
          <div className="row-value">
              ${props.coin.amount * props.coin.value}
          </div>
      </div>
  );
}


export default DataDivs;