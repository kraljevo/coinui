import React from 'react';
import './MainDrawer.css';

const MainDrawer = props => {
    return (
        <ul className='main-drawer'>
            <li><button onClick={props.sendCoins}>Send Coins</button></li>
            <li><button onClick={props.receiveCoins}>Receive Coins</button></li>
            <li><button onClick={props.changeWallet}>Change Wallet</button></li>
            <li><button onClick={props.changeNetwork}>Change Network</button></li>
        </ul>
    )
}

export default MainDrawer;