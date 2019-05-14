import React from 'react';
import './SendDrawer.css';

const SendDrawer = props => {
    let backBtn = 'Back';

    return (
        <div className="container">
            <button className="back-button" onClick={props.click}>
                {backBtn}
            </button>
            <form className="send-drawer">
                <div>
                    <div className="send-item">Coin Type:</div>
                    <select className="send-select" name="send-name">
                        <option defaultValue>Select Coin Type</option>
                        <option value="bitcoin">Bitcoin</option>
                        <option value="litecoin">Litecoin</option>
                        <option value="ethereum">Ethereum</option>
                    </select>
                    <div className="send-item">Amount:</div>
                    <input className="send-amount" type="text" name="send-amount" />
                    <div className="send-item">To Address:</div>
                    <input className="send-address" type="text" name="send-address" />
                </div>
                <input className="send-btn" type="submit" value="Send Coins" />
            </form>
        </div>
    )
}

export default SendDrawer;