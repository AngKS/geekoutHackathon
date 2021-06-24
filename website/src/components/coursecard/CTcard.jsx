import React from 'react'
import './Courses.css'
import placeholder from '../Images/placeholder.png'

function CT(props) {
    return (
        <div className="col-md-3 mx-auto">
            <div className={(props.data.color)?(`card bg-${props.data.color}`):("card bg-light")}>
                <h1 className="card-title">{props.data.course_name}</h1>
                    <div className="card-body">
                        <img src={(props.data.image)?(`../Images/${props.data.image}`):(placeholder)} className="placeholder-img"/>
                        </div>
                    </div>
                </div>
    )
}

export default CT
