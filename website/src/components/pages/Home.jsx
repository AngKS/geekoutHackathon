import React from 'react'
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
    return (
        <div className="site" >
            <Navbar />
            <div className="home_content text-center">
                <h1 className="title">Geekies</h1>
                <div class="row">
                    <div className="col-sm">
                    <Link to="/community"><button className="btn btn-lg button_home Left_btn">&emsp;Community&emsp;</button></Link>
                    </div>
                    <div className="col-sm">
                    <Link to="/getStarted"><button className="btn btn-lg button_home Right_btn">&emsp;Get Started&emsp;</button></Link>
                    </div>
                </div>
                <h5 className="subtitle">click to find out more</h5>
            </div>
        </div>
    )
}

export default Home
