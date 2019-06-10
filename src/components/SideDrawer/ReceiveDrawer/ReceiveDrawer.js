import React from 'react';
import './ReceiveDrawer.css';

const ReceiveDrawer = props => {
    return (
        <div className="container">
            <button className="back-button" onClick={props.backbtn}>
                Back
            </button>
            <form className="receive-drawer">
                <div>
                    <div className="rec-item">Coin Type: {props.coinType}</div>
                    <div className="rec-item">Amount: {props.coinAmount}</div>
                    <div className="rec-item">From: {props.fromAddress}</div>
                </div>
                <input className="rec-submit" type="submit" value="OK"/>
            </form>
        </div>
    )
}

export default ReceiveDrawer;