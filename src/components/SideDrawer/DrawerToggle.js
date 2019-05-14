import React from 'react';
import './DrawerToggle.css';

const DrawerToggle = props => {
    return (
        <div className="menu-container" onClick={props.click}>
            <button className="toggle-btn">
                <div className="toggle-btn-line" />
                <div className="toggle-btn-line" />
                <div className="toggle-btn-line" />
            </button>
        </div>
    )
}

export default DrawerToggle