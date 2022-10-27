import { LOGIN, LOGOUT } from './actionTypes';

const initialState = {
  user: {},
  error: null,
  isAuth: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload.user,
        error: action.payload.error,
        isAuth: action.payload.isAuth,
      }

    case LOGOUT :
      return {
        ...state,
        user: {},
        error: null,
        isAuth: false,
      }

    default:
      return state
  }
}