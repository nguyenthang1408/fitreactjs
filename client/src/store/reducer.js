import { SET_USER } from './Contants';

const initState = {
    user: '',
};

function reducer(state, actions) {
    switch (actions.type) {
        case SET_USER:
            return {
                ...state,
                user: actions.payload,
            };
        default:
            throw new Error('Invalid action!');
    }
}

export { initState };

export default reducer;
