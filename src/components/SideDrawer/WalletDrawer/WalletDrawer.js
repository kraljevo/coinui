import React from 'react';
import './WalletDrawer.css';

const WalletDrawer = props => {
    let backBtn = 'Back';

        return (
            <div className="container">
                <button className="back-button" onClick={props.click}>
                    {backBtn}
                </button>
                <nav className="wallet-drawer">
                    <ul>
                        <li><button>{props.wallets[0].name}</button></li>
                        <li><button>{props.wallets[1].name}</button></li>
                        <li><button>{props.wallets[2].name}</button></li>
                    </ul>
                </nav>
            </div>
        )
    }

export default WalletDrawer;