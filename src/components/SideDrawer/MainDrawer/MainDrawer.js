import React from 'react';
import './MainDrawer.css';

const MainDrawer = props => {
    return (
        <ul className='main-drawer'>
            <li><button onClick={props.sendCoins}>Send Coins</button></li>
            <li><button onClick={props.receiveCoins}>Buy Coins</button></li>
            <li><button onClick={props.changeWallet}>Wallets</button></li>
            <li><button onClick={props.changeNetwork}>Networks</button></li>
        </ul>
    )
}

export default MainDrawer;