import React from "react";
import {useState} from 'react';
import TodoItem from './TodoItem';
import TodoForm from "./TodoForm";
function TodoList(){
   const [todos, setTodos] = useState([]) //список наших задач
    let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

   const getTodo =()=>{
       fetch('http://127.0.0.1:8000/todolist')
           .then(response=>response.json())
           .then(res => {
               setTodos(res);
               })
           .catch(err=>console.log(err));
    }
    //добавление задачи
    const addTask=(userInput)=>{
       if (userInput){
           const  newItem = {
               item_text:userInput,
               is_completed:0,
               is_deleted:1

           }
          // setTodos([...todos,newItem])
           saveItem(newItem);
       }
    }
    const saveItem= (todoItem)=>{
        console.log('new task:');
        console.log(todoItem);
        fetch('http://127.0.0.1:8000/todolist',{
            "method":"Post",
            "headers":{
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=UTF-8',
                'X-CSRF-TOKEN': token
            },
            "body":JSON.stringify(todoItem)
        })
            .then(response=>response.json())
            .then(res => {
                setTodos(res);
            })
            .catch(err=>console.log(err));
    }
    //удаление задачи
    const removeTask = ()=>{}
    //изменение состояния выполнено или нет
    const setCompleted=()=>{}
    React.useEffect(()=>{
       getTodo();
    },[])
    return (
        <div className="container">
            <header>
                <h1>Список задач</h1>
                <h4>Всего: {todos.length}</h4>
            </header>

            <TodoForm addTask = {addTask}/>
            {todos.map(function (todo){
                return (
                    <TodoItem
                        key = {todo.id}
                        todo = {todo}
                        setCompleted = {setCompleted}
                        removeTask = {removeTask}
                    />
                )
            })}
        </div>


    )
}
export  default TodoList;
