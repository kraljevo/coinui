import React from 'react';
import './NetworkDrawer.css';

 const NetworkDrawer = props => {
    return (
        <nav className={props.drawerClasses}>
        <div className="company-name">
            KralCo
        </div>
        <ul>
            <li><button onClick={props.sendCoins}>Send Coins</button></li>
            <li><button onClick={props.receiveCoins}>Receive Coins</button></li>
            <li><button onClick={props.changeWallet}>Change Wallet</button></li>
            <li><button onClick={props.changeNetwork}>Change Network</button></li>
        </ul>
    </nav>
    )
}

export default NetworkDrawer;