import { SET_USER, SET_ID } from './Contants';

export const setUser = (payload) => ({
    type: SET_USER,
    payload,
});

export const Id_parent = (id) =>  ({
    type: SET_ID,
    id,
});
