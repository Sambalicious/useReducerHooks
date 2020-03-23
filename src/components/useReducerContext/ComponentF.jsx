import React, {useContext} from 'react';
import {CountContext} from '../../App';

const ComponentF = () => {
    const countContext  = useContext(CountContext)
    return (
        <div>Component F 
            count - {countContext.countState} 
            <button onClick={()=>countContext.countDispatch('Increment')} >Increment</button>
            <button onClick={()=>countContext.countDispatch('Decrement')} >Decrement </button>
            <button onClick={()=>countContext.countDispatch('Reset')}>Reset</button>
            
             </div>
      );
}
 
export default ComponentF;