import React, { useState } from 'react'

const FormUsingSpreadOperator = () => {

    const [FullName, setFullName] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        qua: ''
    })
    const inputEvent = (event) => {

        const { name, value } = event.target

        setFullName((preValue) => {
            console.log("the preValue is: ", preValue)
            console.log("the event is: ", preValue)
            return {
                ...preValue,
                [name]: value

                // ...preValue == ...FullName 
            }

            // console.log('fullname obj ',FullName)
            // console.log('prevalobj ',preValue)

            // if (name === "fname") {
            //     return {
            //         fname: value,
            //         lname: preValue.lname,
            //         email: preValue.email,
            //         phone: preValue.phone,

            //     }
            // }
            // else if (name === "lname") {
            //     return {
            //         fname: preValue.fname,
            //         email: preValue.email,
            //         phone: preValue.phone,
            //         lname: value


            //     }
            // }
            // else if (name === "email") {
            //     return {
            //         fname: preValue.fname,
            //         lname: preValue.lname,
            //         phone: preValue.phone,
            //         email: value


            //     }
            // }
            // else if (name === "phone") {
            //     return {
            //         fname: preValue.fname,
            //         lname: preValue.lname,

            //         email: preValue.email,
            //         phone: value,


            //     }
            // }
        })

    };

    const onSubmit = (event) => {
        event.preventDefault()
        alert("submitted")
    }
    return (
        <form onSubmit={onSubmit}>
            <h1>Hello {FullName.fname} {FullName.lname} </h1>
            <p>{`Your Email Is: ` + FullName.email}</p>
            <p>{`Your Number Is: ` + FullName.phone}</p>
            <p>{`Your Qualification Is: ` + FullName.qua}</p>
           
            <input type="text" placeholder="Enter Lastname" name='lname' onChange={inputEvent} value={FullName.lname} />
            <input type="text" placeholder="Enter Name" name='fname' onChange={inputEvent} value={FullName.fname} />
            <input type="email" placeholder="Enter Email" name='email' onChange={inputEvent} value={FullName.email} />
            <input type="text" placeholder="Enter Qualification" name='qua' onChange={inputEvent} value={FullName.qua} />
            <input type="number" placeholder="Enter Number" name='phone' onChange={inputEvent} value={FullName.phone} />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default FormUsingSpreadOperator







// sirf form tag use krenge to dom reload ho jyga
// so we use  event.preventDefault()
// setfullname aur setfullLastNAME KI STATES FINAL VALUE KO STORE KRNE K LIE HAIN BAS 

// preValue me pura obj hot hai

// basically what is happening is the value is nothing but the value that you get from typing 
// inside the input field and you are assigning that value to[name] but now what this [name] is ?
// basically you have given the name as a prop inside the input tag, now lets take an example that
//  you have written in fname input field so now the name that will be passed on 
//  Onchange will be 'fname' so you are saying [fname] : value that you have typed now inside the return{
//   ...preValue,
//   [name]:value,
// };

// you are actually taking the whole value of preValue and saying give me everything from
//  that object inside useState and also assign the [fname] : value to it. (this is from the eg we took
//      where the value is nothing but the value you typed)  so it will get updated, actually you can remove
//       the value property from you input tag and still your code will work.....