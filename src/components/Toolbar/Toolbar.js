import React from 'react';
import DrawerToggle from '../SideDrawer/DrawerToggle';
import './Toolbar.css';

export default class Toolbar extends React.Component {
    render() {
        return (
            <header className="toolbar">
                <nav className="toolbar-navigation">
                    <div className="toolbar-toggle-btn">
                        <DrawerToggle click={this.props.openDrawer} />
                    </div>
                    <div className="toolbar-logo">WALLET</div>
                </nav>
            </header>
        )
    }
}