import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from "../constants";

const storage = JSON.parse(localStorage.getItem('todos'));

console.log('storage', storage);

const initialState = {
    todos: storage ? storage : []
};
console.log('initialState', initialState);

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            state = {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        ...action.payload,
                        isCompleted: false,

                    }
                ]
            };
            localStorage.setItem('todos', JSON.stringify(state.todos));
            return state;
        case EDIT_TODO:
            state = {
                ...state,
                todos: [...state.todos].reduce((prev, curr) => [...prev, curr.id === action.payload.id ? action.payload : curr], [] )
            };
            localStorage.setItem('todos', JSON.stringify(state.todos));
            return state;
        case REMOVE_TODO:
            state = {
                ...state,
                todos: [...state.todos].filter(item => item.id !== action.payload.id)
            };
            localStorage.setItem('todos', JSON.stringify(state.todos));
            return state;
        default:
            return state
    }
};