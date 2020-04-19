import React, { useState } from 'react';
import { connect }from 'react-redux'
import { FaPlus } from 'react-icons/fa'
import { AddTodo } from "../../../redux/actions/TodoAction";
import { v4 as uuidv4 } from 'uuid';

const TodoForm = props => {

    const [text, setText] = useState('');

    const handleSubmit = e =>{
        e.preventDefault();

        if(text.trim() === ''){
            setText('');
            return alert('Add todo')
        }

        props.addTodo({
            id: uuidv4(),
            text,
        });
        setText('');
    };

    return (
        <>
            <div className={'todo-form'}>
                <form>
                    <input
                        type="text"
                        placeholder="Enter a Todo"
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />
                    <button className="btn-success" onClick={handleSubmit}> <FaPlus /> Add</button>
                </form>
            </div>
        </>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        addTodo: data => {
            dispatch(AddTodo(data))
        }
    }
};

export default connect(null, mapDispatchToProps)(TodoForm);