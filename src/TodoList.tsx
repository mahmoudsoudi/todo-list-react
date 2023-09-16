
import React,{ useState } from 'react'
import TodoItem from "./TodoItem"
export default function TodoList(props){

    const items = props!=undefined?props.items.map( i=>(<TodoItem status={i.status} value={i.value} key={i.id} id={i.id}/>)):[]
    return (
        <div className="todo--list">
            <ul>
            {items}
            </ul>
        </div>
    )
}