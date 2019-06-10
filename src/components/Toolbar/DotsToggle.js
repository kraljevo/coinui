import React from 'react';
import avatar from '../images/user_avatar.png'
import './DotsToggle.css';

const DotsToggle = props => {
    return (
        <div className="drop-container" onClick={props.click}>
            <div style={{transform: 'scale(1.25,0.5)'}}>v</div>
            <img className="drop-menu-btn" src={avatar} alt="avatar" />
        </div>
    )
}

export default DotsToggle