import React from 'react';
import './SendDrawer.css';

const SendDrawer = props => {
    return (
        <div className="send-container">
            <button className="back-button" onClick={props.backbtn}>
                Back
            </button>
            <form className="send-drawer">
                <div className="send-address-container">
                    <div className="send-item">To Address:</div>
                        <input className="send-address" type="text" name="send-address" />
                </div>
                <div className="type-amount-container">
                    <div className="type-container">
                    <div className="send-item">Coin Type:</div>
                        <select className="send-select" name="send-name">
                            <option defaultValue>Select Coin Type</option>
                            {Object.keys(props.coins).map((key) => (
                                <option>{key}</option>
                            ))}
                        </select>
                    </div>
                    <div className="amount-container">
                        <div className="send-item">Amount:</div>
                        <input className="send-amount" type="number" name="send-amount" />
                    </div>
                </div>
                <div className="send-btn-container">
                    <input className="send-btn" type="submit" value="Send Coins" />
                </div>
            </form>
        </div>
    )
}

export default SendDrawer;