import React from 'react';
import ReactDOM from 'react-dom';

import './main.scss';

const App = () => (
    <div>
    <h1 className='title'>React Game!</h1>
    <p>{new Date().toLocaleDateString()}</p>
    </div>
);

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

