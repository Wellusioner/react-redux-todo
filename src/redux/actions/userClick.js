import { CLICK_ME } from '../constants'

export default number => {
    return {
        type: CLICK_ME,
        number
    }
};