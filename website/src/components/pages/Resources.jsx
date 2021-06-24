import React from 'react'
import Navbar from "../navbar/Navbar"
import Courses from "../coursecard/courses.json"
import CT from "../coursecard/CT.json"
import Coursecard from '../coursecard/Coursecard'
import CTcard from '../coursecard/CTcard'
import './Resources.css'

function Resources() {
    let allCourses = Courses.courses
    let allCT = CT.courses
    return (
        <div>
            <Navbar />
            <h1 className="text-center text-dark didac-font">Languages</h1>
            <div className="row">
                {
                    allCourses.map(item => <Coursecard data={item}/>)
                }
                </div>
                <br></br>
            <h1 className="text-center text-dark didac-font">Computational Thinking Courses</h1><br></br>
            <h2 className="text-center railway-font">
            Computational thinking is the process of approaching a problem in a systematic manner and creating
            and expressing a solution such that it can be carried out by a computer.
            Many quantitative and data-centric problems can be solved using computational thinking and
            an understanding of computational thinking will give you a foundation for solving problems that have real-world,
            social impact.  
            </h2>
            <div className="row">
                {
                    allCT.map(item => <CTcard data={item}/>)
                }
                </div>
        </div>
    )
}

export default Resources
