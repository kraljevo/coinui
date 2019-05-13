import React from 'react';
import './DotsToggle.css';

const DotsToggle = props => {
    return (
        <button className="dots-menu" onClick={props.click}>
            <div className="dots-menu-dot" />
            <div className="dots-menu-dot" />
            <div className="dots-menu-dot" />
        </button>
    )
}

export default DotsToggle