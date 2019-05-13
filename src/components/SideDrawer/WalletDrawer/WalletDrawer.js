import React from 'react';
import './WalletDrawer.css';

const WalletDrawer = props => {
        return (
            <nav className="wallet-drawer">
            <ul>
                <li><button onClick={props.wallets[0].name}>Send Coins</button></li>
                <li><button onClick={props.wallets[1].name}>Receive Coins</button></li>
                <li><button onClick={props.wallets[2].name}>Change Wallet</button></li>
            </ul>
        </nav>
        )
    }

export default WalletDrawer;