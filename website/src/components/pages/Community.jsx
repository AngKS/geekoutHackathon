import React from 'react'
import Navbar from "../navbar/Navbar"
import Article from "../articles/Article"
import Sidebar from '../sidebar/Sidebar'

function Community() {
    return (
        <div>
            <Navbar />
            <div className="container-fluid mx-5">
                <h1>This is Community Page</h1>
                <section className="row d-flex">
                    <Sidebar className="col-md-4 mx-auto" />
                    <Article className="col-md-6" />
                </section>
            </div>
        </div>
    )
}

export default Community
