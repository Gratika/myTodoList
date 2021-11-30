import {useState} from 'react'
function TodoForm(){
    const [userInput, setUserInput] = useState(''); //сщстояние инпута
    const saveNewItem = ()=>{}
    return (
        <div>
            <form onSubmit={saveNewItem}>
                <input type="text" value={userInput} placeholder="Введите задачу..."/>
                <button>Сохранить</button>
            </form>
        </div>
    )
}
export  default TodoForm;
