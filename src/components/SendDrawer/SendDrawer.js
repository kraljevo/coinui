import React from 'react';
import './SendDrawer.css';

const SendDrawer = props => {
    let drawerClasses = ['send-drawer']
    if(props.show) {
        drawerClasses = 'send-drawer open'
    }

    return (
    <nav className={drawerClasses}>
        <ul>
            <li><button onClick={props.click} href="/">Send Coins</button></li>
            <li><button onClick={props.click} href="/">Change Wallets</button></li>
        </ul>
    </nav>
    )
};


export default SendDrawer;