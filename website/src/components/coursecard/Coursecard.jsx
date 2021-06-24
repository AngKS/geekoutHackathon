import React from 'react'
import { Link } from 'react-router-dom'
import './Courses.css'

function Coursecard(props) {
    return (
        <div className="col-md-3 mx-auto">
            <div className={(props.data.color)?(`card bg-${props.data.color}`):("card bg-light")}>
                <h1 className="card-title">{props.data.course_name}</h1>
                    <div className="card-body">
                        {
                            (props.data.tutorial) ? (<Link className="btn btn-primary" to='/tutorials'>Tutorial</Link>) : (<div></div>)
                            }
                            <br></br>
                            <br></br>
                            {
                                (props.data.cheatsheet) ? (<Link className="btn btn-primary" to='/CheatSheet'>CheatSheet</Link>) : (<div></div>)
                            }
                        </div>
                    </div>
                </div>
    )
}

export default Coursecard
