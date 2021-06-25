import React from 'react'


function T(props) {
    return (
        <div>
            <div className="techniquecard jumbotron">
                <h1 className="card-techniques-title text-dark">Techniques:</h1>
                <div className="card-technique-body">
                    {
                        (props.data.technique) ? (props.data.technique) : ("XXX")
                    }
                </div>
            </div>


        </div>
    )
}

export default T
