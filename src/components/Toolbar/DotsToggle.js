import React from 'react';
import avatar from '../images/user_avatar.png'
import './DotsToggle.css';

const DotsToggle = props => {
    return (
        <div className="drop-container" onClick={props.click}>
            <div id="down-arrow">v</div>
            <img className="drop-menu-btn" src={avatar} alt="avatar" />
        </div>
    )
}

export default DotsToggle