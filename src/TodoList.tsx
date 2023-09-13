

export default function TodoList(props){
  
    const items = props.items.map( i=> <li id="item{i.key}">
        {i.value} is {i.status}
        <button onClick={()=>i.donethis(i.key)}>
            done
        </button>
        </li> )
    return (
        <div className="todo--list">
            <ul>
            {items}
            </ul>
        </div>
    )
}