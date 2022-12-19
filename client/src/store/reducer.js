import { SET_USER,SET_ID } from './Contants';

const initState = {
    user: '',
    idP: 0,
};

function reducer(state, actions) {
    switch (actions.type) {
        case SET_USER:
            return {
                ...state,
                user: actions.payload,
            };
        case SET_ID:
            return {
                ...state,
                idP:actions.id,
            }
        default:
            throw new Error('Invalid action!');
    }
}

export { initState };

export default reducer;
