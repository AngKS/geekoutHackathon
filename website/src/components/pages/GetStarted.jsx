import {React, useState, useEffect} from 'react'
import Navbar from '../navbar/Navbar'

function GetStarted() {

    const [firstState, setFirstState] = useState("false")

    // useEffect(() => {
    //     setFirstState("Value1")
    // }, [])

    return (
        <div>
            <Navbar />
            <h1>Get Started Page</h1>
            <h2>{firstState}</h2>

            <button className="btn btn-success" onClick={()=>{
                setFirstState("hello")
            }}>Click Me</button>
        </div>
    )
}

export default GetStarted
