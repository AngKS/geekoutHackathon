import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import './cards.css'
import Lady from "../Images/Lady.png"
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
                <h5 className="Getstart_title card-title my-3">What's your name?</h5>
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
                    <button className="Getstart_button Next btn btn-lg" onClick={()=>{
                    setsecond(!second)
                    setthird(!third)
                }}>Next</button>
                </form>
            </div>}
            {third&&<div className={(third)?"Getstart_content_big card text-center":"d-none"}>
                <h5 className="Getstart_title card-title Hello">Hello Cody,<br/>I'm <span className="rose">Rose</span>, your coach for today!</h5>
                <img src={Lady} alt="" className="w-25 pic"/>
                <form action="" className="Getstarted_title">
                    {/* <input type="submit" hidden ></input> */}
                    <i class='fas fa-arrow-circle-right arrow' onClick={()=>{
                    setthird(!third)
                    setfourth(!fourth)
                }}></i>
                </form>
            </div>}
            {fourth&&<div className={(fourth)?"Getstart_content_big card text-center":"d-none"}>
                <h5 className="Getstart_title card-title Hello">Today, we'll be going through the<br /> basic of coding!</h5>
                <img src={Lady} alt="" className="w-25 pic"/>
                <form action="" className="Getstarted_title">
                    {/* <input type="submit" hidden ></input> */}
                    <i class='fas fa-arrow-circle-right arrow' onClick={()=>{
                    setfourth(!fourth)
                    setfifth(!fifth)
                }}></i>
                </form>
            </div>}
            {fifth&&<div className={(fifth)?"Getstart_content_big card text-center":"d-none"}>
            <h5 className="Getstart_title card-title Hello">Coding is <span className="simple">simple</span><br /><br />Imagine a story playing out in your head...</h5>
                <img src={Lady} alt="" className="w-25 pic_s"/>
                <form action="" className="Getstarted_title">
                    {/* <input type="submit" hidden ></input> */}
                    <i class='fas fa-arrow-circle-right arrow_s' onClick={()=>{
                    setfifth(!fifth)
                    setsixth(!sixth)
                }}></i>
                </form>
            </div>}
            {sixth&&<div className={(sixth)?"Getstart_content_big card text-center":"d-none"}>
                <h5 className="Getstart_title card-title my-5">sixth card</h5>
                <form action="" className="Getstarted_title">
                    <label for='fname'></label>
                    <input className="text-center Getstart_name" placeholder="[your name]" type="text" id="fname" name="fname" onChange={
                        (data)=>{setusername(data.target.value)}
                    }></input>
                    {/* <input type="submit" hidden ></input> */}
                    <i class='fas fa-arrow-circle-right arrow_s' onClick={()=>{
                    setsixth(!sixth)
                    setseventh(!seventh)
                }}></i>
                </form>
            </div>}
            {seventh&&<div className={(seventh)?"Getstart_content_big card text-center":"d-none"}>
                <h5 className="Getstart_title card-title my-5">seventh card</h5>
                <form action="" className="Getstarted_title">
                    <label for='fname'></label>
                    <input className="text-center Getstart_name" placeholder="[your name]" type="text" id="fname" name="fname" onChange={
                        (data)=>{setusername(data.target.value)}
                    }></input>
                    {/* <input type="submit" hidden ></input> */}
                    <i class='fas fa-arrow-circle-right arrow' onClick={()=>{
                    setseventh(!seventh)
                    seteighth(!eighth)
                }}></i>
                </form>
            </div>}
            {eighth&&<div className={(eighth)?"Getstart_content_big card text-center":"d-none"}>
                <h5 className="Getstart_title card-title my-5">eighth card</h5>
                <form action="" className="Getstarted_title">
                    <label for='fname'></label>
                    <input className="text-center Getstart_name" placeholder="[your name]" type="text" id="fname" name="fname" onChange={
                        (data)=>{setusername(data.target.value)}
                    }></input>
                    {/* <input type="submit" hidden ></input> */}
                    <i class='fas fa-arrow-circle-right arrow' ></i>
                </form>
            </div>}
        </div>
    )
}

export default Firstcard
