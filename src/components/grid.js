import React from 'react';
import Square from './square.js';
import { useState } from 'react';
import _ from '../../node_modules/underscore/underscore.js';

let flashedValues = [0, 4, 6];
let clickedValues = [];
let winState;
let failState = false;

const checkWinState = () => {
    return _.equals(flashedValues, clickedValues);
};


const Grid = () => {
    let [winState, setWinState] = useState({fail: false, win: false});
    let clickState = useState([]);
    let rows = [], columns = [], gridLength = 3;

    for (let i = 0; i < gridLength; i++) {
        rows.push(i);
        columns.push(i);
    }

    return (
      <div className='Grid'>
        {rows.map((row) => {
            return (
                <div className='row'>
                    {columns.map((column)=>{
                        return (
                            <Square flashedValues={flashedValues}
                                clickState={clickState}
                                winState={winState}
                                highlighted={flashedValues.includes((gridLength * row) + column)}
                                setWinState={setWinState}
                                index={(gridLength * row) + column}
                                className={winState.fail ? 'fail' : ''}
                            />
                        );
                    })}
                </div>
            );
        })}
        </div>
    );
  };

export default Grid;