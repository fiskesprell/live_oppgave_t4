import React from 'react';
import { useState } from 'react';

const Counter = () => {

    let [counterNumber, setCounterNumber] = useState(0);

    const increaseValue = () => {
        setCounterNumber(counterNumber += 1)
    }

    const decreaseValue = () => {
        setCounterNumber(counterNumber -= 1)
    }

    const resetValue = () => {
        setCounterNumber(counterNumber = 0)
    }

    return (
      <div>
        <h2>Verdien er: {counterNumber}</h2>
        <button onClick={() => increaseValue()}>Øk</button>
        <button onClick={() => decreaseValue()}>Reduser</button>
        <button onClick={() => resetValue()}>Nullstille</button>
      </div>
    );
  };
  
  export default Counter;