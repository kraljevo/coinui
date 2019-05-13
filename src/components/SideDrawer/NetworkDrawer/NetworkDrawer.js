import React from 'react';
import './NetworkDrawer.css';

 const NetworkDrawer = props => {
    let backBtn = '< Back';

    return (
        <div>
            <button className="back-button" onClick={props.click}>
                {backBtn}
            </button>
            <nav className="network-drawer">
                <ul>
                    <li><button>{props.wallets[0].name}</button></li>
                    <li><button>{props.wallets[1].name}</button></li>
                    <li><button>{props.wallets[2].name}</button></li>
                </ul>
            </nav>
        </div>
    )
}

export default NetworkDrawer;