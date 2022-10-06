import React, { useRef, useEffect, useState } from 'react';

const UseRef= () =>{
    const data = useRef(null);
    const submitHandler = e => {
        e.preventDefault()
        console.log(data.current.value);
        setName(data.current.value)

    }
    useEffect(() => {
        data.current.focus()
    }, [])
    const [name, setName] = useState()  
    return (
        <div>
            <h1>1.What is UseRef Hook ?(Implementation)</h1>
            <p>useState will re-render when the content change and update in UI.</p>
            <p>UseRef doesnot notify you when its content changes.Mutating the current property doesn't cause a re-render.</p>
            <h3>Example:-</h3>
            <form onSubmit={submitHandler}>
                <h2>
                    <input ref={data} type='text' placeholder='Enter your Name' required /><br /><br />
                    <input type='submit'  className="q6" /><br />
                    Name: {name}
                </h2>
            </form>
        </div>
    )
}

export default UseRef;