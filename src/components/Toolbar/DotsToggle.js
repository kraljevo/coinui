import React from 'react';
import './DotsToggle.css';

const DotsToggle = props => {
    return (
        <div className="drop-container" >
            <button className="dots-menu" onClick={props.click}>
                <div className="dots-menu-dot" />
                <div className="dots-menu-dot" />
                <div className="dots-menu-dot" />
            </button>
        </div>
    )
}

export default DotsToggle