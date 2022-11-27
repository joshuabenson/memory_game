import React from 'react';
import Square from './square.js';
import { useState } from 'react';

// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

const Grid = () => {
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
                            <Square index={(gridLength * row) + column} clickState={clickState}/>
                        );
                    })}
                </div>
            );
        })}
        </div>
    );
  };

export default Grid;