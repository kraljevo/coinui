import React from 'react';
import './DropMenu.css';

const DropMenu = props => {
    let menuClasses = 'drop-menu'
    if(props.show){
        menuClasses = 'drop-menu open'
    }

    return (
        <div className={menuClasses}>
            <button onClick={props.addWallet}>Add Wallet</button>
            <button onClick={props.removeWallet}>Remove Wallet</button>
        </div>
    )
}

export default DropMenu;