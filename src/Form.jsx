import React, { useState } from 'react'

const Form = () => {

    const [name, setName] = useState("")
    const [fullName, setfullName] = useState()
    const inputEvent = (event) => {
        setName(event.target.value);
    };
    const onSubmit = () => {
        setfullName(name);
    }
    return (
        <>
            
                <h1>Hello {fullName}</h1>
                <input type="text" placeholder="Enter Name" value={name} onChange={inputEvent} />
                <button onClick={onSubmit}>Submit</button>
            
         </>
    )
}

export default Form