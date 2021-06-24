import React from 'react'
import data from "./articles.json"
import "./articles.css"
import Post from "./post/Post"

function Article() {

    let allArticles = data.articles


    return (
        <div className="scroll container">
            {
                allArticles.map(item => <Post data={item} />)
            }
        </div>
    )
}

export default Article
