import React from 'react';
import useInput from '../hooks/useInput';

const UserFormTwo = () => {
    const [firstName, bindFirstName, resetFirstName] = useInput('');
    const [lastName, bindLastName, resetLastName] = useInput('');


    const handleSubmit = e=>{
        e.preventDefault();

        alert(`Hello ${firstName} ${lastName} your record has been submitted`);
        resetFirstName();
        resetLastName();
    }
    return ( 
        <div>
            <form onSubmit={handleSubmit} action="">
                <label htmlFor="">FirstName: </label>
                     <input type="text"
                        {...bindFirstName}
                    />
                <label htmlFor="">LastName: </label>
                <input type="text"
                {...bindLastName}
                />
                    <button>Register</button>
            </form> 
        </div>
     );
}
 
export default UserFormTwo;