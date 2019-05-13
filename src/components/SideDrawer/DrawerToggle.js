import React from 'react';
import './DrawerToggle.css';

const DrawerToggle = props => {
    return (
        <button className="toggle-btn" onClick={props.click}>
            <div className="toggle-btn-line" />
            <div className="toggle-btn-line" />
            <div className="toggle-btn-line" />
        </button>
    )
}

export default DrawerToggle