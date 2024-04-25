import React from "react";

interface Props {
    todo: Todo;
    toggleTodo: ToggleTodo;
    deleteTodo: DeleteTodo;
}

export const Todo: React.FC<Props> = ({todo, toggleTodo, deleteTodo}) => (
    <div className="todo">
        <input
            type="checkbox"
            checked={todo.complete}
            onClick={() =>{toggleTodo(todo)}}
        />
        <label className='m-2' style={{textDecoration: todo.complete ? 'line-through' : undefined}}>{todo?.text}</label>
        <button
            className='btn btn-danger btn-sm m-2'
            onClick={()=>{deleteTodo(todo?.text)}}>Delete</button>
    </div>
)