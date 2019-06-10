import React from 'react';
import MainDrawer from './MainDrawer/MainDrawer';
import './SideDrawer.css';

const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses = 'side-drawer open';
    }
    
    return (
        <div className={drawerClasses}>
            <MainDrawer
                sendCoins={props.sendCoins}
                receiveCoins={props.receiveCoins}
                changeWallet={props.changeWallet}
                changeNetwork={props.changeNetwork}
            />
        </div>
    )
}

export default SideDrawer;