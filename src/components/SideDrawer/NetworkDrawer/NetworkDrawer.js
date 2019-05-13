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
                    <option selected>Select a Network</option>
                    <option></option>
                    <option></option>
                </select>
            </nav>
        </div>
    )
}

export default NetworkDrawer;