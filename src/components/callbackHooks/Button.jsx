import React from 'react';



const Button = ({children, handleClick}) => {
    console.log('rendering the button component', children)
    return ( 
        <div>
            <button onClick={handleClick}>{children} </button>
        </div>
     );
}
 
export default React.memo(Button); 