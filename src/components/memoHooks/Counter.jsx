import React, {useState, useMemo} from 'react';


const Counter = () => {
    const [counterOne, setCounterOne] =useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementOne = () => {
        setCounterOne(counterOne+ 1);
    }
    const incrementTwo = () => {
        setCounterTwo(prevState => prevState + 1);
    }
    
    const isEven = useMemo(
        () => {        
            return counterOne % 2 === 0
        }, [counterOne]
    ) 
    return ( 
        <div>
            incrementOne - {counterOne}
            <button onClick={incrementOne}>increment One</button>
            <span>{isEven? 'Even': 'Odd'}  </span>
            <div>
            incrementTwo - {counterTwo}
            <button onClick={incrementTwo}>increment Two</button>
            </div>
            
        </div>
     );
}
 
export default Counter;