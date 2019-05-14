import React from 'react';
import './DotsToggle.css';

const DotsToggle = props => {
    return (
        <div className="drop-container" onClick={props.click}>
            <button className="dots-menu">
                <div className="dots-menu-dot" />
                <div className="dots-menu-dot" />
                <div className="dots-menu-dot" />
            </button>
        </div>
    )
}

export default DotsToggle