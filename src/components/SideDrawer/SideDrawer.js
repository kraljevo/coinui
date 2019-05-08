import React from 'react';
import SendDrawer from '../SendDrawer/SendDrawer'
import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = ['side-drawer']
    if(props.show) {
        drawerClasses = 'side-drawer open'
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

export default sideDrawer;