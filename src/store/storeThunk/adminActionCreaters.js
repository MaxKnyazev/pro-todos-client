import { 
  GET_ALL_USERS, 
  EDIT_USER_PENDING, EDIT_USER_SUCCESS, EDIT_USER_ERROR,
  DELETE_USER_PENDING, DELETE_USER_SUCCESS, DELETE_USER_ERROR 
} from './actionTypes';
import { axiosInstance } from '../../utils/axiosInstance';

export const actionGetAllUsers = ({ users, error }) => ({
  type: GET_ALL_USERS,
  payload: {
    users,
    error,
  },
});

export const actionGetAllUsersAsync = () => {
  return async (dispatch) => {
    const setAllUsers = async () => {
      try {
        const response = await axiosInstance.get('/users');

        console.log(response);

        return {
          users: response.data.users,
          error: response.data.error,
        }
      } catch (error) {
        return {
          users: [],
          error: error?.response?.data?.error,
        }
      }
    }

    dispatch(actionGetAllUsers(await setAllUsers()));
  }
}

export const actionDeleteUserPending = () => ({
  type: DELETE_USER_PENDING,
});

export const actionDeleteUserSuccess = ({ id }) => ({
  type: DELETE_USER_SUCCESS,
  payload: {
    id
  },
});

export const actionDeleteUserError = ({ error }) => ({
  type: DELETE_USER_ERROR,
  payload: {
    error
  },
});

export const actionDeleteUserAsync = (id) => {
  return async (dispatch) => {
    const deleteUser = async () => {
      try {
        dispatch(actionDeleteUserPending());
        const response = await axiosInstance.delete(`/users/delete/${id}`); //TODO: Неверный путь (специально для ошибки)

        if ((id === response.data.result.id) && !response.data.error) {
          dispatch(actionDeleteUserSuccess({id, error: null}));
        }
      } catch (error) {
        dispatch(actionDeleteUserError({error}));
      }
    }

    await deleteUser();
  }
}



export const actionEditUserPending = () => ({
  type: EDIT_USER_PENDING,
});

export const actionEditUserSuccess = ({ id, role }) => ({
  type: EDIT_USER_SUCCESS,
  payload: {
    id,
    role
  },
});

export const actionEditUserError = ({ error }) => ({
  type: EDIT_USER_ERROR,
  payload: {
    error
  },
});

export const actionEditUserAsync = (id, role) => {
  return async (dispatch) => {
    const editUser = async () => {
      try {
        dispatch(actionEditUserPending());
        const response = await axiosInstance.put(`/users/edit/${id}`, { role }); //TODO: Неверный путь (специально для ошибки)

        if ((role === response.data.editedUser.role) && !response.data.error) {
          dispatch(actionEditUserSuccess({id, error: null, role}));
        }
      } catch (error) {
        dispatch(actionEditUserError({error}));
      }
    }

    await editUser();
  }
}







// export const actionDeleteUserAsync = (id) => {
//   return async (dispatch) => {
//     const deleteUser = async () => {
//       try {
//         const response = await axiosInstance.delete(`/users/delete/${id}`); //TODO: Неверный путь (специально для ошибки)
//         console.log(typeof response.data.result.id);
//         console.log(typeof id);

//         if ((id === response.data.result.id) && !response.data.error) {
//           dispatch(actionDeleteUser({id, error: null}));
//         }
//       } catch (error) {
//         return {
//           id,
//           error,
//         }
//       }
//     }

//     await deleteUser();
//   }
// }