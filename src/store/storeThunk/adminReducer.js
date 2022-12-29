import { 
  GET_ALL_USERS, 
  EDIT_USER_PENDING, EDIT_USER_SUCCESS, EDIT_USER_ERROR,
  DELETE_USER_PENDING, DELETE_USER_SUCCESS, DELETE_USER_ERROR,
} from './actionTypes';

const initialState = {
  users: [],
  error: null,
  isLoading: false,
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

    case DELETE_USER_PENDING:
      return {
        ...state,
        isLoading: true
      }

    case DELETE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.filter(user => user.users_id !== action.payload.id),
        isLoading: false
      }

    case DELETE_USER_ERROR:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false
      }

    case EDIT_USER_PENDING:
      return {
        ...state,
        isLoading: true
      }

    case EDIT_USER_SUCCESS:
      let idx = 0;
      for (let i = 0; i < state.users.length; i++) {
        if (state.users[i].users_id === action.payload.id) {
          idx = i;
        }
      }
      let newUsers = [...state.users];
      newUsers[idx].role = action.payload.role;

      console.log('+++++++++++++');
      console.log(idx);

      return {
        ...state,
        // users: [...state.users, state.users[idx].role = action.payload.role],
        users: newUsers,
        isLoading: false
      }

    case EDIT_USER_ERROR:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false
      }

    default:
      return state
  }
}