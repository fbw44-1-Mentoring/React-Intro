import React from 'react'

export default function Article(props) {
    return (
        <div>
            <h1>{props.heading}</h1>
            <p>{props.data}</p>
        </div>
    )
}
