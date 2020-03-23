import React, {useState, useCallback} from 'react';
import Title from './Title';
import Count from './Count';
import Button from './Button';

const ParentConponent = () => {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(50000)

    const incrementAge =  useCallback(
        () => {
            setAge(age + 1)
        }, [age])

    const incrementsalary = useCallback(
        () => {
            setSalary(salary + 1000)
        },[salary]

    ) 
    return ( 
        <div>
            <Title />
            <Count text="Age" count={age} />
            <Button handleClick={incrementAge}>increment Age</Button>
            <Count text='salary' count={salary} />
            <Button handleClick={incrementsalary} >increment salary</Button>

        </div>
     );
}
 
export default ParentConponent;