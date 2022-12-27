import { GET_ALL_USERS, EDIT_USER, DELETE_USER } from './actionTypes';

const initialState = {
  users: [],
  error: null,
};


// TODO: =========================== Заменить adminReducer на userReducer
export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload.users,
        error: action.payload.error
      }

    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.users_id !== action.payload.id),
        error: action.payload.error
    }

    default:
      return state
  }
}