import React from 'react';
import '../SideDrawer.css';

const SendDrawer = props => {
    return (
        <div className="drawer-container">
            <button className="back-button" onClick={props.backbtn}>
                Back
            </button>
            <form className="drawer">
                <div className="row-container" >
                    <div className="row-item">
                        <div className="row-label">To Address:</div>
                        <input className="row-input" type="text" name="send-address" />
                    </div>
                </div>
                <div className="row-container">
                    <div className="row-item">
                        <div className="row-label">Coin Type:</div>
                        <select className="row-select" name="send-name">
                            <option defaultValue>Select Coin Type</option>
                            {Object.keys(props.coins).map((key) => (
                                <option>{key}</option>
                            ))}
                        </select>
                        </div>
                    <div className="spacer"></div>
                    <div className="row-item">
                        <div className="row-label">Amount:</div>
                        <input className="row-input" type="number" name="send-amount" />
                    </div>
                </div>
                <div className="submit-button-container">
                    <input className="submit-button" type="submit" value="Send Coins" />
                </div>
            </form>
        </div>
    )
}

export default SendDrawer;