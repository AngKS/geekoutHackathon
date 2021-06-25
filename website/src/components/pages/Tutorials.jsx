import React from 'react'
import Navbar from '../navbar/Navbar'
import Sidebar1 from '../sidebar/Sidebar1'
import Intro from './Intro'
import Techniquecard from '../coursecard/Techniquecard'

function Tutorials() {
    return (
        <div>
            <Navbar/>
            <div className="row">
                <div className="col-md-5">
                    <Sidebar1 className="col-md-4"/>
                </div>
                <div className="col-md-5">
                    <div className="row">
                        <Intro className="col-md-6"/>
                    </div>
                    <div className="row">
                        <Techniquecard/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tutorials
