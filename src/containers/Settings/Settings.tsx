import React from 'react';
import {Link} from 'react-router-dom';

import './Settings.scss';


const Settings = ():JSX.Element => {
    return (
        <div className="settings-wrapper">
            <h1>Settings</h1>
            <ul className="settings-list">
                <li className="settings-item"> <span> Sound: Off</span></li>
                <li className="settings-item"> <span> Change color</span></li>
                <li className="settings-item"> <span> Setting3</span></li>
                <li className="settings-item"> <span> Setting4</span></li>
                <li className="settings-item"> <span> <Link to='/'>Back to Game</Link></span></li>
            </ul>
        </div>
    )
}

export default Settings;