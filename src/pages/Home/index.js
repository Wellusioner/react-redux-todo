import React from 'react';
import { TodoItem, TodoForm } from './components'
import { connect } from 'react-redux'
import get from 'lodash/get'

const Home  = (props) =>{

    return (
        <div className={'todo-wrapper'}>
            <div className="todo-title">A react-redux Todo App</div>
            <TodoForm />
            <div className="todo-group">
                {
                    get(props,'todos','').length
                        ?
                        get(props,'todos','').map(item => <TodoItem key={item.id} {...{item}} />)
                        : <div className={'text-white'}>No to-do. Add some</div>
                }
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        todos: state.todos.todos
    }
};


export default connect(mapStateToProps,null)(Home);