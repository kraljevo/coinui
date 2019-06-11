import React, {Component} from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import SendDrawer from './components/SideDrawer/SendDrawer/SendDrawer';
import ReceiveDrawer from './components/SideDrawer/ReceiveDrawer/ReceiveDrawer';
import WalletDrawer from './components/SideDrawer/WalletDrawer/WalletDrawer';
import NetworkDrawer from './components/SideDrawer/NetworkDrawer/NetworkDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import DataDivs from './components/DataDivs/DataDivs';
import DropMenu from './components/SideDrawer/DropMenu/DropMenu';
import axios from 'axios';
import './App.css'

export default class App extends Component {
  state = {
    sideDrawerOpen: false,
    showDropMenu: false,
    drawerType: 'dashboard',
    coin: [],
    wallet: [{
      id: 1,
      name: "Kral's Wallet"
    }, {
      id: 2,
      name: "Santa's Wallet"
    }, {
      id: 3,
      name: "I'm out of names :|"
    }],
    username: 'John Doe',
    email: 'j.doe@gmail.com'
  }

  componentDidMount() {
    axios
      .get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,BCH,ETH,ETC,LTC&tsyms=USD&api_key={6457c88d1d2832d50f5a9fa2439b97fe72fe413f57b66e932fe4645c1bcffe7b}')
      .then(res => {
        const coin = res.data.DISPLAY;
        this.setState({coin: coin});
      })
  }

  //Drawer Types
  dashboard = () => {this.setState({drawerType: 'dashboard', sideDrawerOpen: false})}
  sendCoins = () => {this.setState({drawerType: 'send', sideDrawerOpen: false})}
  receiveCoins = () => {this.setState({drawerType: 'buy', sideDrawerOpen: false})}
  changeWallet = () => {this.setState({drawerType: 'wallets', sideDrawerOpen: false})}
  changeNetwork = () => {this.setState({drawerType: 'networks', sideDrawerOpen: false})}

  //Open and close drawer
  toggleDrawer = () => {
    this.setState((prevState) => {
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen,
        showDropMenu: false
      }})
  }

  closeDrawer = () => {
    this.setState(() => {
      return {
        sideDrawerOpen: false,
        showDropMenu: false
    }})
  }

  //Open and close drop menu
  toggleDropMenu = () => {
    this.setState((prevState) => {
      return {
        showDropMenu: !prevState.showDropMenu,
        sideDrawerOpen: false
      }})
  }

  //Back Button for menus
  menuBackButton = () => {
    this.setState({
      drawerType: 'dashboard'
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
      sendCoins={this.sendCoins}
      receiveCoins={this.receiveCoins}
      changeWallet={this.changeWallet}
      changeNetwork={this.changeNetwork}/>

    let dropMenu = <DropMenu 
      show={this.state.showDropMenu}
      username={this.state.username}
      useremail={this.state.email}/>

    let coinData = <DataDivs 
      coins={this.state.coin}/>

    let toolBar = <Toolbar 
      drawerType={this.state.drawerType}
      toggleDrawer={this.toggleDrawer}
      toggleDropMenu={this.toggleDropMenu}
      dashboard={this.dashboard}
      sendCoins={this.sendCoins}
      receiveCoins={this.receiveCoins}
      changeWallet={this.changeWallet}
      changeNetwork={this.changeNetwork}
      addWallet={this.addWallet}
      removeWallet={this.removeWallet}/>

    if(this.state.sideDrawerOpen || this.state.showDropMenu) {
      backdrop = <Backdrop
        click={this.closeDrawer}/>
    }

    const displayChoice = (name) => {
      if(name === 'dashboard'){
        return coinData
      }
      if(name === 'send'){
        return <SendDrawer 
          backbtn={this.menuBackButton}
          coins={this.state.coin}/>
      }
      if(name === 'buy'){
        return <ReceiveDrawer 
          backbtn={this.menuBackButton}/>
      }
      if(name === 'wallets'){
        return <WalletDrawer 
          wallets={this.state.wallet}
          backbtn={this.menuBackButton}/>
      }
      if(name === 'networks'){
        return <NetworkDrawer 
          backbtn={this.menuBackButton}/>
      }
    }
    
    //App Rendering
    return (
      <div className="App">
        <div style={{height: '100%'}}>
          {toolBar}
          {sideDrawer}
          {dropMenu}
          {backdrop}
        </div>
        <div className="App-content">
          {displayChoice(this.state.drawerType)}
        </div>
      </div>
    );
  }
}