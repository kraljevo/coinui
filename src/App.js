import React, {Component} from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import DataDivs from './components/DataDivs/DataDivs';
import bitcoin from './components/images/bitcoin.png';
import litecoin from './components/images/litecoin.png';
import ethereum from './components/images/ethereum.png';
import './App.css'

export default class App extends Component {
  state = {
    sideDrawerOpen: false,
    drawerType: '',
    coin: [{
      id: 1,
      name: "Bitcoin",
      icon: <img src={bitcoin} alt="" />,
      amount: 2,
      value: 6000 //value for one coin
    }, {
      id: 2,
      name: "Litecoin",
      icon: <img src={litecoin} alt="" />,
      amount: 10,
      value: 500 //value for one coin
    }, {
      id: 3,
      name: "Ethereum",
      icon: <img src={ethereum} alt="" />,
      amount: 30,
      value: 100 //value for one coin
    }],
    wallet: [{
      name: 'Wallet 1'
    }, {
      name: 'Wallet 2'
    }, {
      name: 'Wallet 3'
    }]
  }

  //Drawer Types
  sendCoins = () => {this.setState({drawerType: 'send-coins'})}
  receiveCoins = () => {this.setState({drawerType: 'receive-coins'})}
  changeWallet = () => {this.setState({drawerType: 'change-wallet'})}
  changeNetwork = () => {this.setState({drawerType: 'change-network'})}

  openDrawer = () => {
    this.setState(() => {
      return {
        sideDrawerOpen: true,
        drawerType: 'main-drawer'
      }})
  }

  closeDrawer = () => {
    this.setState({
      sideDrawerOpen: false,
      drawerType: ''
    })
  }
  
  render() {
    let backdrop;

    if(this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.closeDrawer}/>
    }
    
    return (
      <div className="App">
        <div style={{height: '100%'}}>
          <Toolbar openDrawer={this.openDrawer}/>
          <SideDrawer
            show={this.state.sideDrawerOpen}
            drawerType={this.state.drawerType}
            sendCoins={this.sendCoins}
            receiveCoins={this.receiveCoins}
            changeWallet={this.changeWallet}
            changeNetwork={this.changeNetwork}
            wallets={this.state.wallets}/>
          {backdrop}
        </div>
        <div className="App-content">
          <div className="dollar-value">
            <h4>Total USD Balance</h4>
            <h2>$20,000.00</h2>
          </div>
          <DataDivs 
            coins={this.state.coin}/>
        </div>
      </div>
    );
  }
}