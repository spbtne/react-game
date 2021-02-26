import React from 'react';

import './Statistics.scss'

const Statistics = ():JSX.Element => {
    return (
        <div className="statistics-wrapper">
            <div className="statistics-item timer">
                <p className="timer-title">Timer</p>
                <p className="timer-numbers">00:00:00</p>
            </div>
            <div className="statistics-item moves">
                <p className="moves-title">Moves</p>
                <p className="moves-counter">0</p>
            </div>
            <div className="statistics-item wins">
                <p className="moves-title">Wins</p>
                <p className="moves-counter">0</p>
            </div>
            <div className="statistics-item losses">
                <p className="moves-title">Losses</p>
                <p className="moves-counter">0</p>
            </div>
        </div>

    )
}

export default Statistics;