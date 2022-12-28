import Axios from "axios";
import { useEffect } from "react";
import { useReducer } from "./usereducer1";



function fetchReducer(state, action)
{
   switch (action.type) {
    case 'fetchAPI/request':
        return {...state, isLoading: action.isLoading}
    case 'fetchAPI/success':
        return {...state, isLoading: action.isLoading, data: action.data, error: action.error}
    case 'fetchAPI/error':
        return {...state, isLoading: action.isLoading, data: action.data, error: action.error}
   
    default:
        return state;
   }
}


export const useFetch = (url) => {
    const [state, dispatch] = useReducer(fetchReducer, {
        isLoading: false,
        data: [],
        error: null,
    })

    useEffect(() => {
        (() => {
            dispatch({
                isLoading: true,
                type: 'fetAPI/request',
            })
            try {
                const {data} = Axios.get(url);

                dispatch({
                    type: 'fetchAPI/success',
                    isLoading: false,
                    error: null,
                    data,
                })
            } catch (error) {
                dispatch({
                    type: 'fetchAPI/error',
                    isLoading: false,
                    error: error,
                    data: [],
                })
            }
        })()
    },[url])

    return {...state}
}