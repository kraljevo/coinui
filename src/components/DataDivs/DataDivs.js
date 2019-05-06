import React from 'react';
import bitcoin from '/public/images/bitcoin.ico'
import litecoin from '/public/images/litecoin.ico'
import ethereum from '/public/images/ethereum.ico'
import './DataDivs.css';

const dataDivs = props => (
    <div className="coin-list">
        <div className="list-header">
            <div className="header-name">Name</div>
            <div className="header-amount">Amount</div>
            <div className="header-value">Value</div>
        </div>
        <div className="list-body">
            <div className="table-row">
                <div className="row-name"><img src={bitcoin} alt="Bitcoin Icon" />Bitcoin</div>
                <div className="row-amount">1.0</div>
                <div className="row-value">$1,000</div>
            </div>
            <div className="table-row">
                <div className="row-name"><img src={litecoin} alt="Litecoin Icon" />Litecoin</div>
                <div className="row-amount">2.0</div>
                <div className="row-value">$2,000</div>
            </div>
            <div className="table-row">
                <div className="row-name"><img src={ethereum} alt="Ethereum Icon" />Ethereum</div>
                <div className="row-amount">3.0</div>
                <div className="row-value">$3,000</div>
            </div>
        </div>
    </div>
)


export default dataDivs;