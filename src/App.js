import React, {Component} from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import DataDivs from './components/DataDivs/DataDivs';
import './App.css'

class App extends Component {
  state = {
    sideDrawerOpen: false
  };
  
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }

  render() {
    let backdrop;
    if(this.state.sideDrawerOpen){
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }
        
    return (
      <div className="App">
        <div style={{height: '100%'}}>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen}/>
          {backdrop}
        </div>
        <div className="App-content">
          <div className="dollar-value">
            <h4>Total USD Balance</h4>
            <h2>$20,000.00</h2>
          </div>
          <DataDivs />
        </div>
      </div>
    );
  }
}

export default App;