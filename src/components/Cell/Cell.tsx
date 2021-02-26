import React from 'react';
import classNames from 'classnames';

import './Cell.scss';

interface Props {
    indexOfCell: number,
    valueOfCell: string,
    isCrossed: boolean
  }


const Cell = (props:Props):JSX.Element => {
    
    return (
        <div className={
            classNames(
                'cell', 
                `cell-${props.indexOfCell}`,
                {'isCrossed':props.isCrossed} 
            )}>
                <span>
                {props.valueOfCell}
                </span>
        </div>
    )
}


export default Cell;