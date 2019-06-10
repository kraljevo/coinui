import React from 'react';
import './NetworkDrawer.css';

const NetworkDrawer = props => {
    return (
        <div className="container">
            <button className="back-button" onClick={props.backbtn}>
                Back
            </button>
            <nav className="network-drawer">
                <select className="net-select">
                    <option defaultValue>Select a Network</option>
                    
                </select>
            </nav>
        </div>
    )
}

export default NetworkDrawer;