import {React, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'


function Post(props) {
    let addToLocalStorage = (ID) => {
        localStorage.setItem('articleID', ID)
    }

    return (
        <div className="card p-3 my-3">
            <div className="d-flex justify-content-between">
                <Link className="card-title" to={props.data.link} onClick={() => addToLocalStorage(props.data.articleID)}><h4 className=" text-dark">{props.data.title}</h4></Link>
                <i className="text-muted">{props.data.date} by {props.data.username}</i>
            </div>
            <p className="text-left">{props.data.content}</p>
        </div>
    )
}

export default Post
