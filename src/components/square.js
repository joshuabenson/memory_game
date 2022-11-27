import React from 'react';

const Square = ({index, clickState}) => {
    let squareClicked = () => {
        clickState.push(index)
        console.log(clickState);
    };
    return (
        <div className='Square' onClick={squareClicked}>{index}</div>
    );
};
export default Square;