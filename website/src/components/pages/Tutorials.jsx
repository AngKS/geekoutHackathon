import React from 'react'
import Navbar from '../navbar/Navbar'
import Sidebar1 from '../sidebar/Sidebar1'
import Intro from './Intro'

function Tutorials() {
    return (
        <div>
            <Navbar/>
            <div className="row">
            <Sidebar1 className="col-md-4"/>
            <Intro className="col-md-6"/>
   
            </div>
        </div>
    )
}

export default Tutorials
