import React from 'react';

import './WalletDrawer.css';

const WalletDrawer = props => {
    let backBtn = 'Back';
    let walletNames = props.wallets.map(item => {
      return <WalletName 
        key = {item.id}
        wallet = {item} />
    })

    return (
        <div className="container">
            <button className="back-button" onClick={props.click}>
                {backBtn}
            </button>
            <nav className="wallet-drawer">
                <ul>
                    {walletNames}
                </ul>
            </nav>
        </div>
    )
}

const WalletName = (props) => {
    return (
        <li><button>{props.wallets.name}</button></li>
    );
  }

export default WalletDrawer;