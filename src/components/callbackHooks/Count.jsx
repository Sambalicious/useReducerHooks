import React from 'react'


const Count = ({text, count}) => {
    console.log(' rendering count compoment', text, count)
    return ( 
        <div>
            {text} - {count}
        </div>
     );
}
 
export default React.memo( Count) ;