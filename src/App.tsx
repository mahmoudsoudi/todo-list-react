import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import TodoList from './TodoList'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [count, setCount] = useState(0)
  function donethis(itemId){
    let nettodos = todos;
    // nettodos[itemId].status = "complete"
    console.log(itemId)
    console.log(todos)
    // setTodos({items:nettodos})

  }
  function addTodo(){
    setTodos(prevlist => [...prevlist,{value:x.value,status:"incomplete",key:count,donethis:donethis}])
    setCount(oldcount=>oldcount +1)
  }
  function clearList(){
    setTodos([])
    setCount(0)
  }

  return (
    <>
    <input id='x' name="x" />
    
    <button onClick={clearList}>
    clear List
    </button>
    <button onClick={addTodo}>
      add
    </button>
    <TodoList items={todos}/>
    </>
  )
}

export default App
