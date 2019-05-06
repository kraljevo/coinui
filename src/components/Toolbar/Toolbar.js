import React from 'react';
import DrawerToggle from '../SideDrawer/DrawerToggle';
import './Toolbar.css';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar-navigation">
            <div className="toolbar-toggle-btn">
                <DrawerToggle click={props.drawerClickHandler} />
            </div>
            <div className="toolbar-logo"><a href="/">COIN WALLET</a></div>
            <div className="spacer"></div>
            <div className="toolbar-navigation-items">
                <ul>
                    <li><a href="/sendcoins">Send Coins</a></li>
                </ul>
            </div>
        </nav>
    </header>
)


export default toolbar;