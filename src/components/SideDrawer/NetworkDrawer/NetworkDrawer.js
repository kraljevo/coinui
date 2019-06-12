import React from 'react';
import '../SideDrawer.css';

const NetworkDrawer = props => {
    return (
        <div className="drawer-container">
            <button className="back-button" onClick={props.backbtn}>
                Back
            </button>
            <div className="drawer">
                <div className="row-container">
                    <div className="row-item">
                        <div className="row-label">
                            Network:
                        </div>
                        <select className="row-select" name="network-name">
                            <option defaultValue>Select Network</option>
                            {Object.keys(props.networks).map((key) => (
                                <option>{key}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className="submit-button-container">
                <input className="submit-button" type="submit" value="Select Network"/>
            </div>
        </div>
    )
}

export default NetworkDrawer;