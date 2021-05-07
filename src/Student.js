import React from 'react'

export default function Student(props) {
    console.log(props)
    return (
        <div>
            <h1>hi, {props.name}</h1>
        </div>
    )
}
