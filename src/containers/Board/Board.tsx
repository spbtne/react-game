import React from 'react';
import Cell from '../../components/Cell/Cell';

import './Board.scss'

interface Cell_I {
    index: number,
    value: string,
    isCrossed: boolean
}

const cellData: Array<Cell_I> = Array.from({length: 9}, (v,k) => {
return {
    index: k,
    value: '',
    isCrossed: false,
    onClick: Function
}
})


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
