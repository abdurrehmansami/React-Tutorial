import React, { useState } from 'react'

const ComplexInputForm = () => {
    const [FullName, setFullName] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: ''
    })
    const inputEvent = (event) => {
        //    console.log(event.target.value);
        //    const value = event.target.value
        //    const name = event.target.name
        // console.log(event.target.name)
        const { value, name, } = event.target

        setFullName((preValue) => {
            // console.log(preValue)

            if (name === "fname") {
                return {
                    fname: value,
                    lname: preValue.lname,
                    email: preValue.email,
                    phone: preValue.phone,
                }
            }
            else if (name === "lname") {
                return {
                    fname: preValue.fname,
                    email: preValue.email,
                    phone: preValue.phone,
                    lname: value


                }
            }
            else if (name === "email") {
                return {
                    fname: preValue.fname,
                    lname: preValue.lname,
                    phone: preValue.phone,
                    email: value


                }
            }
            else if (name === "phone") {
                return {
                    fname: preValue.fname,
                    lname: preValue.lname,

                    email: preValue.email,
                    phone: value,


                }
            }
        })

    };

    const onSubmit = (event) => {
        event.preventDefault()
        alert("submitted")
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <h1>Hello {FullName.fname} {FullName.lname} </h1>
                <p>{`Your Email Is: `+FullName.email}</p>
                <p>{`Your Number Is: `+FullName.phone}</p>
                <input type="text" placeholder="Enter Name" name='fname' onChange={inputEvent} value={FullName.fname} />
                <input type="text" placeholder="Enter Lastname" name='lname' onChange={inputEvent} value={FullName.lname} />
                <input type="email" placeholder="Enter Email" name='email' onChange={inputEvent} value={FullName.email} />
                <input type="number" placeholder="Enter Number" name='phone' onChange={inputEvent} value={FullName.phone} />
                <button type='submit'>Submit</button>
            </form>
        </>
    )
};

export default ComplexInputForm






// sirf form tag use krenge to dom reload ho jyga
// so we use  event.preventDefault()

// setfullname aur setfullLastNAME KI STATES FINAL VALUE KO STORE KRNE K LIE HAIN BAS 