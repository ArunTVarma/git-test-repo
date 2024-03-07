import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
   const [todos, setTodos] = useState([]);

   fetch("http://localhost:3000/todos")
      .then(async function(res){
        const json = await res.json();
        setTodos(json.todos);// we are doing json.todos becasuse we need that todos object we mentioned in backend.
        // just do a get request and check 
      })
  
  return (
    <div>
        <CreateTodo></CreateTodo>
        <Todos todos ={todos}></Todos>
    </div>
  )
}

export default App
