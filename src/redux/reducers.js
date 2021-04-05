import { data } from './state';
export const reducer = (state = data, actions) => {
    switch (actions.type) {
        case "Test":
            console.log(state);
            return state;
        default:
            return state;
    }
};