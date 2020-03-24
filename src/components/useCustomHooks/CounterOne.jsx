import React, {useState} from 'react';
import UseCounter from './useCounter';

const CounterOne = () => {
        const [count, increment,decrement,reset] = UseCounter()
    return ( 
        <div>
            <h2>Count = {count} </h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
     );
}
 
export default CounterOne;