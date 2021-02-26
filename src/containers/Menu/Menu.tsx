import React from 'react';
import {Link} from 'react-router-dom';

import './Menu.scss'

const Menu = ():JSX.Element => {
    return (
        <div className="menu-wrapper">
            <button>Start</button>
            <button>Pause</button>
            <button>Save game</button>
            <button>Single Play</button>
            <button>Two players</button>
            <button><Link to='/settings'>Settings</Link></button>
            
        </div>
    )
}

export default Menu;