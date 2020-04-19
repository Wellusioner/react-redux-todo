import { CLICK_ME } from "../constants";

const initialState = {
    number: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CLICK_ME:
            return state = {
                ...state,
                number: state.number + action.number
            };
        default:
            return state
    }
};