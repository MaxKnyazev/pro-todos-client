import { GET_ALL_USERS, EDIT_USER, DELETE_USER } from './actionTypes';
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

export const actionDeleteUser = ({ id, error }) => ({
  type: DELETE_USER,
  payload: {
    id,
    error,
  },
});

// TODO: Вариант рабочий, но костыль. Исправить!!!! 
// TODO: Сделать три экшена: pending, successfully, error 
export const actionDeleteUserAsync = (id) => {
  return async (dispatch) => {
    const deleteUser = async () => {
      try {
        const response = await axiosInstance.delete(`/0users/delete/${id}`); //TODO: Неверный путь (специально для ошибки)
        // response.result.id
        console.log(typeof response.data.result.id);
        console.log(typeof id);

        if ((id === response.data.result.id) && !response.data.error) {
          dispatch(actionDeleteUser({id, error: null}));
          // return {
          //   id,
          //   error: null,
          // }
        }
      } catch (error) {
        return {
          id,
          error,
        }
      }
    }

    await deleteUser();
    // dispatch(actionDeleteUser(await deleteUser()));
  }
}