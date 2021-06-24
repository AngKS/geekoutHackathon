import React from 'react'
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
    return (
        <div className="site" >
            <Navbar />
            <div className="content text-center">
                <h1 className="title">Geekies</h1>
                <Link to="/community"><button className="btn btn-lg button Left_btn">&emsp;Community&emsp;</button></Link>
                <Link to="/getStarted"><button className="btn btn-lg button Right_btn">&emsp;Get Started&emsp;</button></Link>
                <h5 className="homePageh5">click to find out more</h5>
            </div>
        </div>
    )
}

export default Home
