import React from 'react';
import { FaPencilAlt, FaTrashAlt, FaRegCheckSquare, FaRegSquare } from 'react-icons/fa'
const TodoItem = () => {
    return (
        <>
            <div className="todo-item">
                <div className="todo-item-inside">
                    <div className="todo-text-wrapper">
                        <small><FaRegSquare/> <FaRegCheckSquare/></small>
                        <span className={`todo-text completed }`} >Task</span>
                    </div>
                    <div className="button-group">
                        <button className="btn-success" type="button" ><FaPencilAlt /></button>
                        <button className="btn-danger" type="button" ><FaTrashAlt /></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TodoItem;