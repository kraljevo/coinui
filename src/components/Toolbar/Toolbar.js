import React from 'react';
import DrawerToggle from '../SideDrawer/DrawerToggle';
import DotsToggle from './DotsToggle';
import './Toolbar.css';

const Toolbar = props => {
    return (
        <header className="toolbar">
            <nav className="toolbar-navigation">
                <DrawerToggle click={props.toggleDrawer}/>
                <div className="toolbar-logo" onClick={props.dashboard}>
                    KRALCO
                </div>
                <div className="nav-item" onClick={props.sendCoins}>
                    Send
                </div>
                <div className="nav-item" onClick={props.receiveCoins}>
                    Buy
                </div>
                <div className="nav-item" onClick={props.changeWallet}>
                    Wallets
                </div>
                <div className="nav-item" id="networks" onClick={props.changeNetwork}>
                    Networks
                </div>
                <DotsToggle click={props.toggleDropMenu} />
            </nav>
        </header>
    )
}

export default Toolbar;