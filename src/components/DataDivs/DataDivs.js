import React from 'react';
import iconBc from '../images/icon-bc.js'
import iconLite from '../images/icon-lite.js'
import iconEth from '../images/icon-eth.js'
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
                <div className="row-name">{iconBc}Bitcoin</div>
                <div className="row-amount">1.0</div>
                <div className="row-value">$1,000</div>
            </div>
            <div className="table-row">
                <div className="row-name">{iconLite}Litecoin</div>
                <div className="row-amount">2.0</div>
                <div className="row-value">$2,000</div>
            </div>
            <div className="table-row">
                <div className="row-name">{iconEth}Ethereum</div>
                <div className="row-amount">3.0</div>
                <div className="row-value">$3,000</div>
            </div>
        </div>
    </div>
)


export default dataDivs;