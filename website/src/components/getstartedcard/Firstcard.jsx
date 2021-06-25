import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import './cards.css'

function Firstcard() {

    const [username,setusername] = useState("")
    const [first,setfirst] = useState(true)
    const [second,setsecond] = useState(false)
    const [third,setthird] = useState(false)
    const [fourth,setfourth] = useState(false)
    const [fifth,setfifth] = useState(false)
    const [sixth,setsixth] = useState(false)
    const [seventh,setseventh] = useState(false)
    const [eighth,seteighth] = useState(false)

    return (
        <div className='Getstart text-center mx-auto'>

            {first&&<div className={(first)?"Getstart_content card text-center":"d-none"}>
                <h5 className="Getstart_title card-title my-5">WELCOME<br />to the <cite>GEEKIE</cite> world of CODING!</h5>
                <button className="Getstart_button btn btn-lg" onClick={()=>{
                    setfirst(!first) 
                    setsecond(!second)
                }}>Click to begin</button>
            </div>}

            {second&&<div className={(second)?"Getstart_content card text-center":"d-none"}>
                <h5 className="Getstart_title card-title my-5">What's your name?</h5>
                <form action="" className="Getstarted_title">
                    <label for='fname'></label>
                    <input className="text-center Getstart_name" placeholder="[your name]" type="text" id="fname" name="fname" required onChange={
                        (data)=>{setusername(data.target.value)}
                    }></input>
                    {/* <input type="submit" hidden onChange={()=>{
                        window.location.reload(false)
                        setsecond(!second)
                        setthird(!third)
                    }}></input> */}
                    <button className="Getstart_button btn btn-lg" onClick={()=>{
                    setsecond(!second)
                    setthird(!third)
                }}>Submit</button>
                </form>
            </div>}
            {third&&<div className={(third)?"Getstart_content card text-center":"d-none"}>
                <h5 className="Getstart_title card-title my-5">Third card</h5>
                <form action="" className="Getstarted_title">
                    <label for='fname'></label>
                    <input className="text-center Getstart_name" placeholder="[your name]" type="text" id="fname" name="fname" onChange={
                        (data)=>{setusername(data.target.value)}
                    }></input>
                    {/* <input type="submit" hidden ></input> */}
                    <button className="Getstart_button btn btn-lg" onClick={()=>{
                    setthird(!third)
                    setfourth(!fourth)
                }}>Click to begin</button>
                </form>
            </div>}
            {fourth&&<div className={(fourth)?"Getstart_content card text-center":"d-none"}>
                <h5 className="Getstart_title card-title my-5">fourth card</h5>
                <form action="" className="Getstarted_title">
                    <label for='fname'></label>
                    <input className="text-center Getstart_name" placeholder="[your name]" type="text" id="fname" name="fname" onChange={
                        (data)=>{setusername(data.target.value)}
                    }></input>
                    {/* <input type="submit" hidden ></input> */}
                    <button className="Getstart_button btn btn-lg" onClick={()=>{
                    setfourth(!fourth)
                    setfifth(!fifth)
                }}>Click to begin</button>
                </form>
            </div>}
            {fifth&&<div className={(fifth)?"Getstart_content card text-center":"d-none"}>
                <h5 className="Getstart_title card-title my-5">fiftth card</h5>
                <form action="" className="Getstarted_title">
                    <label for='fname'></label>
                    <input className="text-center Getstart_name" placeholder="[your name]" type="text" id="fname" name="fname" onChange={
                        (data)=>{setusername(data.target.value)}
                    }></input>
                    {/* <input type="submit" hidden ></input> */}
                    <button className="Getstart_button btn btn-lg" onClick={()=>{
                    setfifth(!fifth)
                    setsixth(!sixth)
                }}>Click to begin</button>
                </form>
            </div>}
            {sixth&&<div className={(sixth)?"Getstart_content card text-center":"d-none"}>
                <h5 className="Getstart_title card-title my-5">sixth card</h5>
                <form action="" className="Getstarted_title">
                    <label for='fname'></label>
                    <input className="text-center Getstart_name" placeholder="[your name]" type="text" id="fname" name="fname" onChange={
                        (data)=>{setusername(data.target.value)}
                    }></input>
                    {/* <input type="submit" hidden ></input> */}
                    <button className="Getstart_button btn btn-lg" onClick={()=>{
                    setsixth(!sixth)
                    setseventh(!seventh)
                }}>Click to begin</button>
                </form>
            </div>}
            {seventh&&<div className={(seventh)?"Getstart_content card text-center":"d-none"}>
                <h5 className="Getstart_title card-title my-5">seventh card</h5>
                <form action="" className="Getstarted_title">
                    <label for='fname'></label>
                    <input className="text-center Getstart_name" placeholder="[your name]" type="text" id="fname" name="fname" onChange={
                        (data)=>{setusername(data.target.value)}
                    }></input>
                    {/* <input type="submit" hidden ></input> */}
                    <button className="Getstart_button btn btn-lg" onClick={()=>{
                    setseventh(!seventh)
                    seteighth(!eighth)
                }}>Click to begin</button>
                </form>
            </div>}
            {eighth&&<div className={(eighth)?"Getstart_content card text-center":"d-none"}>
                <h5 className="Getstart_title card-title my-5">eighth card</h5>
                <form action="" className="Getstarted_title">
                    <label for='fname'></label>
                    <input className="text-center Getstart_name" placeholder="[your name]" type="text" id="fname" name="fname" onChange={
                        (data)=>{setusername(data.target.value)}
                    }></input>
                    {/* <input type="submit" hidden ></input> */}
                    <button className="Getstart_button btn btn-lg">Click to begin</button>
                </form>
            </div>}
        </div>
    )
}

export default Firstcard
