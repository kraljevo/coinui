import React from 'react';
import MainDrawer from './MainDrawer/MainDrawer';
import SendDrawer from './SendDrawer/SendDrawer';
import ReceiveDrawer from './ReceiveDrawer/ReceiveDrawer';
import WalletDrawer from './WalletDrawer/WalletDrawer';
import NetworkDrawer from './ReceiveDrawer/ReceiveDrawer';
import './SideDrawer.css';

const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses = 'side-drawer open';
    }

    const DrawerChoice = (name) => {
        if (name === 'main-drawer' && props.show){
            return <MainDrawer
                sendCoins={props.sendCoins}
                receiveCoins={props.receiveCoins}
                changeWallet={props.changeWallet}
                changeNetwork={props.changeNetwork}/>
        }
        if (name === 'send-drawer' && props.show){
            return <SendDrawer />
        }
        if (name === 'receive-coins' && props.show){
            return <ReceiveDrawer />
        }
        if (name === 'change-wallet' && props.show){
            return <WalletDrawer 
                wallets={props.wallets}/>
        }
        if (name === 'change-network' && props.show){
            return <NetworkDrawer />
        }
    }
    
    return (
        <div className={drawerClasses}>
            <div className="company-name">
                KralCo
            </div>
            {DrawerChoice(props.drawerType)}
        </div>
    )
}

export default SideDrawer;