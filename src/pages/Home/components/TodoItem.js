import React, { useState } from 'react';
import { FaPencilAlt, FaTrashAlt, FaRegCheckSquare, FaRegSquare, FaCheck } from 'react-icons/fa'
import get from 'lodash/get'
import { connect } from 'react-redux'
import {EditTodo, RemoveTodo} from '../../../redux/actions/TodoAction'

const TodoItem = ({ item, removeTodo, editTodo }) => {

    const [text, setText] = useState(get(item,'text',''));
    const [isEditing, setEdit] = useState(false);

    const handleEdit = e => {
        e.preventDefault();

        if(text.trim() === ''){
            return alert('Type something')
        }

        editTodo({...item, text})
        setEdit(false);
    };

    return (
        <>
            <div className="todo-item">
                {
                    !isEditing ?
                    <div className="todo-item-inside">
                        <div className="todo-text-wrapper">
                            <small onClick={() => editTodo({...item, isCompleted: !item.isCompleted})}>{get(item,'isCompleted','') ? <FaRegCheckSquare/> : <FaRegSquare/>}</small>
                            <span className={`todo-text ${get(item,'isCompleted','') ? 'completed' : ''}`} >{get(item,'text','')}</span>
                        </div>
                        <div className="button-group">
                            {!item.isCompleted && <button className="btn-success" type="button" onClick={() => setEdit(true)}><FaPencilAlt /></button>}
                            <button className="btn-danger" type="button" onClick={() => removeTodo(item)}><FaTrashAlt /></button>
                        </div>
                    </div>
                    :
                    <form className="todo-item-form">
                        <input name="todo" onChange={e => setText(e.target.value)}  value={text} />
                        <button type="submit" className="btn-success" onClick={handleEdit}><FaCheck /></button>
                    </form>
                }
            </div>
        </>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        removeTodo: data => {
            dispatch(RemoveTodo(data))
        },
        editTodo: data => {
            dispatch(EditTodo(data))
        }
    }
};

export default connect(null, mapDispatchToProps)(TodoItem);