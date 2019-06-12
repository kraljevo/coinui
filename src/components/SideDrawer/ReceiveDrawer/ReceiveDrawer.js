import React from 'react';
import '../SideDrawer.css';

const ReceiveDrawer = props => {
    return (
        <div className="drawer-container">
            <button className="back-button" onClick={props.backbtn}>Back</button>
            <form className="drawer">
                <div className="row-container">
                    <div className="row-item">
                        <div className="row-label">Network:</div>
                        <select className="row-select">
                            <option defaultValue>Select Network</option>
                            {Object.keys(props.networks).map((key) => (
                                <option>{key}</option>
                            ))}
                        </select>
                    </div>
                    <div className="spacer"></div>
                    <div className="row-item">
                        <div className="row-label">Coin Type:</div>
                        <select className="row-select" name="rec-name">
                            <option defaultValue>Select Coin Type</option>
                            {Object.keys(props.coins).map((key) => (
                                <option>{key}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="row-container">
                    <div className="row-item">
                        <div className="row-label">Amount:</div>
                        <input className="row-input" type="number" name="buy-amount" />
                    </div>
                    <div className="spacer"></div>
                    <div className="row-item">
                        <div className="row-label">Price:</div>
                        <input className="row-input" type="number" name="buy-price" />
                    </div>
                </div>
                <div className="submit-button-container">
                    <input className="submit-button" type="submit" value="Buy Coins"/>
                </div>
            </form>
        </div>
    )
}

export default ReceiveDrawer;