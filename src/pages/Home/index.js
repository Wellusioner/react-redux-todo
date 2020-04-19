import React from 'react';
import { TodoItem, TodoForm } from './components'

const Home  = () =>{

    return (
        <div className={'todo-wrapper'}>
            <div className="todo-title">Todo App</div>
            <TodoForm />
            <div className="todo-group">
                <TodoItem />
            </div>
        </div>
    );
};


export default Home;