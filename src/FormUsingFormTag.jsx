import React, { useState } from 'react'

const FormUsingFormTag = () => {

    const [name, setName] = useState("")
    const [lastname, setLastname] = useState("")
    const [fullName, setfullName] = useState("")
    const [fullLastname, setfullLastname] = useState("")
    const inputEvent = (event) => {
        setName(event.target.value);

    };
    const inputEventLastname = (event) => {

        setLastname(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault()
        setfullName(name);
        setfullLastname(lastname)




    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <h1>Hello {fullName + " " + fullLastname}</h1>
                <input type="text" placeholder="Enter Name" onChange={inputEvent} />
                <input type="text" placeholder="Enter Lastname" onChange={inputEventLastname} />
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default FormUsingFormTag


// sirf form tag use krenge to dom reload ho jyga
// so we use  event.preventDefault()

// setfullname aur setfullLastNAME KI STATES FINAL VALUE KO STORE KRNE K LIE HAIN BAS 