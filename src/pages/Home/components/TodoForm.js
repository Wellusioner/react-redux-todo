import React from 'react';
import { FaPlus } from 'react-icons/fa'

const TodoForm = () => {
    return (
        <>
            <div className={'todo-form'}>
                <form>
                    <input
                        type="text"
                        placeholder="Enter a Todo"
                    />
                    <button className="btn-success" > <FaPlus /> Add</button>
                </form>
            </div>
        </>
    );
};

export default TodoForm;