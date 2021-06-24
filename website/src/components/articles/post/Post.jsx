import {React, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'


function Post(props) {
    let addToLocalStorage = (ID) => {
        localStorage.setItem('articleID', ID)
    }

    return (
        <div className="card p-2">
            <Link className="card-title" to="/articlePage" onClick={() => addToLocalStorage(props.data.articleID)}><h5 className=" text-dark">{props.data.title}</h5></Link>
            <i className="text-muted">{props.data.date} by {props.data.username}</i>
            <p>{props.data.content}</p>
        </div>
    )
}

export default Post
