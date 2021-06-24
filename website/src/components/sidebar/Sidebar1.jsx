import React from 'react'
import './Sidebar1.css'

function Sidebar1() {
    return (
        <div>
            <body data-spy="scroll" data-target="#myScrollspy" data-offset="1">
                <div className="container-fluid">
                    <div class="_row">
                        <nav class="col-sm-3 col-4" id = "myScrollspy">
                            <ul className="nav flex-column">
                                <li className="tutorial my-2">
                                    <a className="tutorial text-dark" href="#tutorials">Tutorials</a>
                                </li>
                                <li className="beginner my-2">
                                    <a className="beginner text-dark" href="#beginner">Beginners</a>
                                </li>
                                <li className="nav-item1 my-2 sidebar-item">
                                    <a className="nav-link active" href="#intro">Intro</a>
                                </li>
                                <li className="nav-item2 my-2 sidebar-item">
                                    <a className="nav-link active" href="#text">Text</a>
                                </li>
                                <li className="nav-item3 my-2 sidebar-item">
                                    <a className="nav-link active" href="#formatting">Formatting</a>
                                </li>
                                <li className="nav-item4 my-2 sidebar-item">
                                    <a className="nav-link active" href="#positioning">Positioning</a>
                                </li>
                            </ul>
                        </nav>
                        
                    </div>
                </div>
            </body>
            </div>
    )
}

export default Sidebar1
