import React from 'react';

import './WalletDrawer.css';

const WalletDrawer = props => {
    let names = props.wallets.map(item => {
      return <WalletName 
        key = {item.id}
        wallet = {item} />
    })

    return (
        <div className="container">
            <button className="back-button" onClick={props.backbtn}>
                Back
            </button>
            <nav className="wallet-drawer">
                <ul>
                    {names}
                </ul>
            </nav>
        </div>
    )
}

const WalletName = (props) => {
    return (
        <li><button>{props.wallet.name}</button></li>
    );
  }

export default WalletDrawer;