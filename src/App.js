import React, {Component} from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import DataDivs from './components/DataDivs/DataDivs';
import bitcoin from './components/images/bitcoin.png';
import litecoin from './components/images/litecoin.png';
import ethereum from './components/images/ethereum.png';
import './App.css'
import DropMenu from './components/SideDrawer/DropMenu/DropMenu';

export default class App extends Component {
  state = {
    sideDrawerOpen: false,
    showDropMenu: false,
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

  //Open and close drawer
  openDrawer = () => {
    this.setState(() => {
      return {
        sideDrawerOpen: true,
        drawerType: 'main-drawer'
      }})
  }

  closeDrawer = () => {
    this.setState(() => {
      return {
        sideDrawerOpen: false,
        showDropMenu: false,
        drawerType: ''
    }})
  }

  //Open and close drop menu
  toggleDropMenu = () => {
    this.setState((prevState) => {
      return {
        showDropMenu: !prevState.showDropMenu
      }})
  }

  //Back Button for menus
  menuBackButton = () => {
    this.setState({
      drawerType: 'main-drawer'
    })
  }

  //Add or remove wallets
  addWallet = (walletName) => {
    this.setState({wallet: this.state.wallet.push({walletName}).sort()
    })
  }

  deleteWallet = (walletName) => {
    var index = this.state.wallet.indexOf(walletName)
    if(index > -1) {
      this.setState({wallet: this.state.wallet.splice(index, 1)})
    }
  }
  
  render() {
    //Component Props Passed Down
    let backdrop;
    
    let sideDrawer = <SideDrawer 
      show={this.state.sideDrawerOpen}
      drawerType={this.state.drawerType}
      menuBack={this.menuBackButton}
      sendCoins={this.sendCoins}
      receiveCoins={this.receiveCoins}
      changeWallet={this.changeWallet}
      changeNetwork={this.changeNetwork}
      wallets={this.state.wallet}/>

    let dropMenu = <DropMenu 
      show={this.state.showDropMenu}/>

    let coinData = <DataDivs 
      coins={this.state.coin}/>

    let toolBar = <Toolbar 
      openDrawer={this.openDrawer}
      toggleDropMenu={this.toggleDropMenu}
      addWallet={this.addWallet}
      removeWallet={this.removeWallet}/>

    if(this.state.sideDrawerOpen || this.state.showDropMenu) {
      backdrop = <Backdrop
        click={this.closeDrawer}/>
    }
    
    //App Rendering
    return (
      <div className="App">
        <div style={{height: '100%'}}>
          {toolBar}
          {sideDrawer}
          {dropMenu}
          {dropMenu}
          {backdrop}
        </div>
        <div className="App-content">
          <div className="dollar-value">
            <h4>Total USD Balance</h4>
            <h2>$20,000.00</h2>
          </div>
          {coinData}
        </div>
      </div>
    );
  }
}