import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from "./TodoList";
import '../../css/todoListStyle.css'

function Application() {
    return (
        <div className="App">
<TodoList/>
        </div>
    );
}

export default Application;

if (document.getElementById('app')) {
    ReactDOM.render(<Application />, document.getElementById('app'));
}
