/* 

    todos = [
        {
            title:"go to gym",
            description:"go to gym arun "
        },{
            title:"go to gym",
            description:"go to gym deepthi"
        },
        {
            title:"go to gym",
            description:"go to gym arya"
        }
    ]
*/


export function Todos({todos}){
    return <div>
        {todos.map(function(todo){
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                 <button>{todo.completed == true ? "Completed":"Mark as complete"}</button>
            </div>
        })}
    </div>
}