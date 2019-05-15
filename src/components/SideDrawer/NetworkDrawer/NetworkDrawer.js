import React from 'react';
import './NetworkDrawer.css';

const NetworkDrawer = props => {
    let backBtn = 'Back';

    return (
        <div className="container">
            <button className="back-button" onClick={props.click}>
                {backBtn}
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