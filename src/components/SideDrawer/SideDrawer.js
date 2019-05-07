import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = ['side-drawer']
    if(props.show) {
        drawerClasses = 'side-drawer open'
    }

    return (
    <nav className={drawerClasses}>
        <ul>
            <li><a href="/">Send Coins</a></li>
            <li><a href="/">Change Wallets</a></li>
        </ul>
    </nav>
    )
};

export default sideDrawer;