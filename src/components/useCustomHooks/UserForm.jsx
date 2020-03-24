import React, {useState} from 'react';


const UserForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName ] = useState('');

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }
    const handleLastName = (e) =>{
        setLastName(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        alert(`hello ${firstName} ${lastName} your form has been successfully submitted`)

    }
    return ( 
        <div>
            <form onSubmit={handleSubmit} action="">

                <div>
                <label htmlFor=""> First Name</label>
                <input type="text" onChange={handleFirstName} value={firstName} placeholder="Enter Your First Name" />

                <label htmlFor="">last Name</label>
                <input type="text" onChange={handleLastName} value={lastName} placeholder="Enter Your last name" />
                <button type="submit">Submit</button>
                </div>
            </form>
           
        </div>
     );
}
 
export default UserForm;