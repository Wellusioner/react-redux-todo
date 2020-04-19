import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from '../constants'

export const AddTodo = todo => {
    return {
        type: ADD_TODO,
        payload: todo
    }
};

export const EditTodo = todo => {
    return {
        type: EDIT_TODO,
        payload: todo
    }
};

export const RemoveTodo = todo => {
    return {
        type: REMOVE_TODO,
        payload: todo
    }
};