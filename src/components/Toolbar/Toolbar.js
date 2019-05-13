import React from 'react';
import DrawerToggle from '../SideDrawer/DrawerToggle';
import DotsToggle from './DotsToggle';
import './Toolbar.css';

const Toolbar = props => {
    return (
        <header className="toolbar">
            <nav className="toolbar-navigation">
                <div className="toolbar-toggle-btn">
                    <DrawerToggle click={props.openDrawer} />
                </div>
                <div className="toolbar-logo">WALLET</div>
                <div className="spacer"></div>
                    <DotsToggle click={props.toggleDropMenu} />
            </nav>
        </header>
    )
}

export default Toolbar;