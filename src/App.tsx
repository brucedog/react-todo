import React, {useEffect} from 'react';
import './App.css';
import {Todo} from "./components/todo/Todo";
import {NavBar} from "./components/navBar/NavBar";
import {AddTodo} from "./components/addTodo/AddTodo";
//import {Database} from "sqlite3";
import {openDatabase, SQLiteDatabase} from "react-native-sqlite-storage";

const initialTodos: Todo[] = [
    {
        text: 'Walk the dog',
        complete: false,
    },
    {
        text: 'Write app',
        complete: true,
    },
];

export const getDBConnection = async () => {
  return openDatabase({name: 'todo-data.db', location: 'default'});
};

export const createTable  = async (db: SQLiteDatabase) => {
  //create table if not exists
  const query = 'CREAT TABLE IF NOT EXISTS todos(text TEXT NOT NULL, completed BOOL);';
  await db.executeSql(query);
};

function App() {
    const [todos, setTodos] = React.useState<Todo[]>(initialTodos);

    useEffect(() =>{
        //const db = new Database('db.sqlite');

    }, []);

    const toggleTodo = (selectedTodo: Todo): void => {
        const newTodos = todos.map((todo) => {
            if (todo === selectedTodo) {
                return {
                    ...todo,
                    complete: !todo.complete,
                };
            }
            return todo;
        });
        setTodos(newTodos);
    };

    const addTodo: AddTodo = (text: string): void => {
        const newTodo = {text, complete: false};
        setTodos([...todos, newTodo])
    };

    const deleteTodo: DeleteTodo = (id: string): void => {
        const remainingTodos = todos.filter((todo) => todo.text !== id);
        setTodos(remainingTodos)
    }

  return (
   <>
        <NavBar />
       <ul>
           {
               todos.map((todo) => (
                   <Todo todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
               ))
           }
       </ul>
       <AddTodo addTodo={addTodo}/>
   </>
  );
}

export default App;
