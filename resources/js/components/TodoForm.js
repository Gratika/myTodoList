import {useState} from 'react'
function TodoForm({addTask}){
    const [userInput, setUserInput] = useState(''); //сщстояние инпута
    const saveNewItem = (e)=>{
        e.preventDefault(); //отмена стандартного действия. Форма не будет отправляться
        addTask(userInput);
        setUserInput("");
    }
    const userInputChange = (e)=>{
        console.log(e.currentTarget.value)
        setUserInput(e.currentTarget.value)
    }
    const  handleKeyPress=(e)=>{
        if(e.key==="Enter"){
            saveNewItem(e);
        }
    }
    return (
        <div>
            <form onSubmit={saveNewItem}>
                <input
                    type="text"
                    value={userInput}
                    onChange={userInputChange}
                    onKeyDown={handleKeyPress}
                    placeholder="Введите задачу..."/>
                <button>Сохранить</button>
            </form>
        </div>
    )
}
export  default TodoForm;
