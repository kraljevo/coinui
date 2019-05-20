import React from 'react';
import './DataDivs.css';

const DataDivs = props => {
  let rows = props.coins.map(item => {
    return <CoinRow 
      key = {item.id}
      coin = {item} />
  })

  return (
    <div className="coin-list">
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