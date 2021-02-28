
import React, { useState } from 'react';
import classNames from 'classnames';

import './Cell.scss';
import { addCellData } from '../../redux/storage';
import {player1, player2} from '../../redux/players'

interface Props {
    indexOfCell: number,
    valueOfCell: string,
    isCrossed: boolean
  }

let  currentPlayer = player1; 


const Cell = (props:Props):JSX.Element => {
    const [cellCurrentValue, setCellData] = useState(props.valueOfCell);
    const clickFunc = (event: any):void => {
        if(event.target.innerText === '') {
            const curretIndex = parseInt(event.target.dataset.index, 10);
            addCellData(currentPlayer.currentSide, curretIndex);
            setCellData(currentPlayer.currentSide);
        } 
        currentPlayer.name === player1.name ? currentPlayer = player2 : currentPlayer = player1;
    }
        return (
            <div onClick={ clickFunc } data-index={props.indexOfCell} className={
            classNames(
                'cell', 
                {'isCrossed':props.isCrossed} 
                
            )}>
  
                {cellCurrentValue}
               
        </div>
        )
}



export default Cell;