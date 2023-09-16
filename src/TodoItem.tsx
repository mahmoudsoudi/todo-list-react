import React,{ useState } from 'react'
export default function TodoItem(props){
    const [isDone,setIsDone] =React.useState(props.status)
    function setDone(){
        console.log("clicked")
        setIsDone(old=>!old)
       
    }
    const styles={
        textDecoration:isDone?"line-through":"none",
        backgroundColor:isDone?"black":"white"
    }
    return ( <li key={`item${props.id}`} style={styles}>
    {props.value} is {props.status} {isDone?"true":"false"}
    <button onClick={()=>setDone()} style={styles}>
        done
    </button>
    </li> )
}
    