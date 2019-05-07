import React from 'react';
import bitcoin from '../images/bitcoin.png';
import litecoin from '../images/litecoin.png';
import ethereum from '../images/ethereum.png';
import './DataDivs.css';

class DataDivs extends React.Component {
    constructor() {
      super();
      this.state = {
        coin: [{
          id: 1,
          name: "Bitcoin",
          icon: <img src={bitcoin} alt="" />,
          amount: 2,
          value: 12000
        }, {
          id: 2,
          name: "Litecoin",
          icon: <img src={litecoin} alt="" />,
          amount: 10,
          value: 5000
        }, {
          id: 3,
          name: "Ethereum",
          icon: <img src={ethereum} alt="" />,
          amount: 10,
          value: 1000
        }]
      }
    }
    render() {
      let rows = this.state.coin.map(coin => {
        return <CoinRow key = {
          coin.id
        }
        coin = {
          coin
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
                ${props.coin.value}
            </div>
        </div>
    );
  }


export default DataDivs;