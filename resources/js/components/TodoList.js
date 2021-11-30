import {useState} from 'react';
import TodoItem from './TodoItem';
import TodoForm from "./TodoForm";
function TodoList(){
   const [todos, setTodos] = useState([]) //список наших задач
    //добавление задачи
    const addTask=()=>{}
    //удаление задачи
    const removeTask = ()=>{}
    //изменение состояния выполнено или нет
    const setCompleted=()=>{}
    return (
        <div className="container">
            <header>
                <h1>Список задач</h1>
                <h4>Всего: {todos.length}</h4>
            </header>

            <TodoForm addTask = {addTask}/>
            {todos.map((todo)=>{
                return (
                    <TodoItem
                        key = {todo.id}
                        todo = {todo}
                        setComleted = {setCompleted}
                        removeTask = {removeTask}
                    />
                )
            })}
        </div>


    )
}
export  default TodoList;
