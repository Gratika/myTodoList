import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from "./TodoList";

function Application() {
    return (
        <div className="container">
<TodoList/>
        </div>
    );
}

export default Application;

if (document.getElementById('app')) {
    ReactDOM.render(<Application />, document.getElementById('app'));
}
