import React from 'react';

import './DrawerToggle.css';

const drawerToggle = props => (
    <button className="toggle-btn" onClick={props.click}>
        <div className="toggle-btn-line" />
        <div className="toggle-btn-line" />
        <div className="toggle-btn-line" />
    </button>
)



export default drawerToggle;