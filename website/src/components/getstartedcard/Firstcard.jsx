import React from 'react'
import { Link } from 'react-router-dom'
import './cards.css'

function Firstcard() {
    return (
        <div className='Getstart'>
            <div className="Getstart_content Getstart_transit card text-center">
                <h5 className="Getstart_title card-title my-5">WELCOME<br />to the <cite>GEEKIE</cite> world of CODING!</h5>
                <Link to="/getStarted_2"><button className="Getstart_button btn btn-lg">Click to begin</button></Link>
            </div>
        </div>
    )
}

export default Firstcard
