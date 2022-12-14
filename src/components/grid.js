import React from 'react';
import Square from './square.js';
import { useState } from 'react';
import _ from '../../node_modules/underscore/underscore.js';

let clickedValues = [];
let winState;
let failState = false;

// const checkWinState = () => {
//     return _.equals(flashedValues, clickedValues);
// };


const generateFlashedValues = (gridLength) => {
    let values = [];
    for (let i = 0; i < Math.floor(gridLength + (gridLength/2)); i++) {
        // min is 0
        const min = Math.ceil(0);
        // max is gridLength * gridLength - 1
        const max = Math.floor((gridLength * gridLength) - 1);

        values.push(Math.floor(Math.random() * (max - min + 1)) + min);
        // get random number between min and max
        // while (values.length < Math.floor(gridLength + (gridLength/2))) {
        //     let candidate = Math.floor(Math.random() * (max - min + 1)) + min;
        //     if (!values.includes(candidate)) {
        //         values.push(candidate);
        //     }
        // }
    }
    console.log('flashedValues', values);
    return values;
};
let flashedValues = generateFlashedValues(3);

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