import '../../css/todoListStyle.css'
function TodoItem({todo, setCompleted, removeTask}){
    return (
        <div key={todo.id}  className="item-todo">
            <div className={todo.is_completed ? "item-text strike":"item-text"}
            onClick={()=>setCompleted(todo)}>
                {todo.item_text}
            </div>
            <div className="item-delete" onClick={()=>removeTask(todo.id)}>
                x
            </div>
        </div>
    )
}
export  default TodoItem;
