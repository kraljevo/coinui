import React from 'react';
import '../SideDrawer.css';

const WalletDrawer = props => {
    return (
        <div className="drawer-container">
            <button className="back-button" onClick={props.backbtn}>
                Back
            </button>
            <div className="row-container">
                <div className="row-item">
                    <div className="row-label">Wallets:</div>
                    <select className="row-select" name="wallets-name">
                        <option defaultValue>Select Wallet</option>
                        {props.wallets.map((key) => (
                            <option>{key.name}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="submit-button-container">
                <input className="submit-button" type="submit" value="Select Wallet" />
            </div>
        </div>
    )
}

export default WalletDrawer;