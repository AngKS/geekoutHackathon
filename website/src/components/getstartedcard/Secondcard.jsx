import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import './cards.css'


function Secondcard() {

    const[username,setusername]=useState("")

    return (
        <div className='Getstart'>
            <div className="Getstart_content Getstart_transit card text-center">
                <h5 className="Getstart_title card-title my-5">What's your name?</h5>
                <form action="" className="Getstarted_title">
                    <label for='fname'></label>
                    <input className="text-center Getstart_name" placeholder="[your name]" type="text" id="fname" name="fname" onChange={
                        (data)=>{setusername(data.target.value)}
                    }></input>
                    <input type="submit" hidden></input>
                </form>
            </div>
        </div>
    )
}

export default Secondcard
