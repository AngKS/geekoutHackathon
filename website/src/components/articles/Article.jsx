import React from 'react'
import data from "./articles.json"
import "./articles.css"
import Post from "./post/Post"

function Article(props) {

    let allArticles = data.articles


    return (
        <div className="scroll container" style={props.height ? {height : `${props.height}px`} : {height: '400px'}}>
            {
                allArticles.map(item => <Post data={item} />)
            }
        </div>
    )
}

export default Article
