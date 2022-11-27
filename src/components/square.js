import React from 'react';

const checkFlashedValues = (flashedValues, square) => {
    return flashedValues.includes(square);
};

const setFailState = (index, winState, setWinState, flashedValues) => {
    if(!checkFlashedValues(flashedValues, index)) {
        setWinState( (winState) => {return {fail: true, win: false}}  );
    }
};

const Square = ({index, clickState, highlighted, flashedValues, setWinState, winState}) => {
    let squareClicked = () => {
        clickState.push(index);
        console.log(clickState);
        setFailState(index, winState, setWinState, flashedValues);
        console.log(winState);
    };
    return (
        <div className={`Square ${ winState.fail ? 'fail' : 'not-failed'} ${ highlighted ? 'highlighted' : 'not-highlighted' }`} onClick={squareClicked}>{index}</div>
    );
};
export default Square;