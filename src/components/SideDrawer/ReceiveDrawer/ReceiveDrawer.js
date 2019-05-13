import React from 'react';
import './ReceiveDrawer.css';

const ReceiveDrawer = props => {
    let backBtn = '< Back';

    return (
        <div >
            <button className="back-button" onClick={props.click}>
                {backBtn}
            </button>
            <form className="receive-drawer">
                <div>
                    <div className="form-item">Coin Type:</div>
                    <select name="send-name">
                        <option value="bitcoin">Bitcoin</option>
                        <option value="litecoin">Litecoin</option>
                        <option value="ethereum">Ethereum</option>
                    </select>
                    <div className="form-item">Amount:</div>
                    <input type="text" name="send-amount" />
                    <div className="form-item">To Address:</div>
                    <input type="text" name="send-address" />
                </div>
                <input type="submit" />
            </form>
        </div>
    )
}

export default ReceiveDrawer;