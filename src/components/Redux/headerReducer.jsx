import axios from "axios";

const SET_USERS = 'SET_USERS';
const SET_ORDERS = 'SET_ORDERS';
const CHANGE_ID = 'CHANGE_ID';

export const setUsers = (users) => ({ type: SET_USERS, users });
export const setOrders = (orders) => ({ type: SET_ORDERS, orders });

let initialState = {
    id: 1,
    users: [],
    orders: []
};

const headerReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_ORDERS: {
            return {
                ...state, orders: action.orders
            }
        }
        case SET_USERS: {
            return {
                ...state, users: action.users
            }
        }
        case CHANGE_ID: {
            return {
                ...state, id: action.id
            }
        }
        default: {
            return state
        }
    }
}
export default headerReducer;

export const changeId = (id) => ({ type: CHANGE_ID, id })

export const getUsers = () => (dispatch, getState) => {
    let id = +getState().header.id

    axios.get(`http://localhost:3000/${id}/users`)
        .then((res) => {
            dispatch(setUsers(res.data.users))
        })
}

export const getOrders = () => (dispatch, getState) => {
    let id = +getState().header.id

    axios.get(`http://localhost:3000/${id}/orders`)
        .then((res) => {
            dispatch(setOrders(res.data.orders))
        })
}