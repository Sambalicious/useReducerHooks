import React,{useState, } from 'react';
import { useDocTitle } from '../hooks/UseDocTitle';



const DocTitleOne = () => {
    const [count, setCount] = useState(0);
useDocTitle(count)
    return ( 
        <div>
            <button onClick={()=>setCount(prevState => prevState + 1)}>
              count = {count}
            </button>
            count {count}
        </div>
     );
}
 
export default DocTitleOne;