import React from 'react'
import techniques from './techniques.json'
import T from './T'

function Techniquecard() {
    let alltechniques = techniques.techniques
    return (
        <div>
            {
                alltechniques.map(item=><T data={item}/>)
            }
        </div>
    )
}

export default Techniquecard
