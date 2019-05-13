import React from 'react';
import './DrawerToggle.css';

export default class DrawerToggle extends React.Component {
    render (){
        return (
            <button className="toggle-btn" onClick={this.props.click}>
                <div className="toggle-btn-line" />
                <div className="toggle-btn-line" />
                <div className="toggle-btn-line" />
            </button>
        )
    }
}