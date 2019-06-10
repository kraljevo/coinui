import React from 'react';
import './DropMenu.css';

const DropMenu = props => {
    let menuClasses = 'drop-menu'
    if(props.show){
        menuClasses = 'drop-menu open'
    }

    return (
        <div className={menuClasses}>
            <div className="drop-item">
                {props.username}
            </div>
            <div className="drop-item" id="email">
                {props.useremail}
            </div>
            <div className="drop-item" onClick={props.settings}>Settings</div>
            <div className="drop-item" onClick={props.tools}>Tools</div>
            <div className="drop-item" onClick={props.tools}>Help</div>
            <div className="drop-item" onClick={props.tools}>Sign Out</div>
        </div>
    )
}

export default DropMenu;