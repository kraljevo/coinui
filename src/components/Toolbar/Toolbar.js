import React from 'react';
import DrawerToggle from '../SideDrawer/DrawerToggle';
import DotsToggle from './DotsToggle';
import './Toolbar.css';

const Toolbar = props => {
    return (
        <header className="toolbar">
            <nav className="toolbar-navigation">
                <div className="toolbar-toggle-btn">
                    <DrawerToggle click={props.toggleDrawer} />
                </div>
                <div className="toolbar-logo">kralco</div>
                <div className="nav-item">Send Coins</div>
                <div className="nav-item">Buy Coins</div>
                <div className="nav-item">Wallets</div>
                <div className="nav-item">Networks</div>
                <DotsToggle click={props.toggleDropMenu} />
            </nav>
        </header>
    )
}

export default Toolbar;