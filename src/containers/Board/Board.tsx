import React from 'react';
import ReactDOM from 'react-dom';
import Cell from '../../components/Cell/Cell';
import { cellData } from './../../redux/storage';

import './Board.scss'

const Board = ():JSX.Element => {
    return (
        <div className="board-wrapper">
            {cellData.map((item) => (
            <Cell 
              key={item.index} 
              indexOfCell={item.index} 
              valueOfCell={item.value} 
              isCrossed={item.isCrossed}
            ></Cell>))}
        </div>
    )
}

export default Board;



