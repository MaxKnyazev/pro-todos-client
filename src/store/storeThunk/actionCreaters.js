import { LOGIN, LOGOUT } from './actionTypes';
import { axiosInstance } from '../../utils/axiosInstance';

export const actionLogin = ({ user, error, isAuth }) => ({
  type: LOGIN,
  payload: {
    user,
    error,
    isAuth,
  },
});

export const actionLogout = () => ({
  type: LOGOUT,
});

export const actionLoginAsync = ({ email, password }) => {
  return async (dispatch) => {
    const setLogin = async () => {
      try {
        const response = await axiosInstance.post('/auth/login', {
          email,
          password
        });

        console.log(response);

        localStorage.setItem('token', response.data.user.accessToken);

        return {
          user: response.data.user,
          error: response.data.error,
          isAuth: true,
        }
      } catch (error) {
        return {
          user: {},
          error: error?.response?.data?.error,
          isAuth: false,
        }
      }
    }

    // setLogin()
    // .then(({ email, role, serverMessage }) => {dispatch(actionSetUser({ email, role, serverMessage }))})
    // .catch(e => console.log(e));

    // const { email, role, serverMessage } = await setLogin();
    // dispatch(actionSetUser({ email, role, serverMessage }));

    dispatch(actionLogin(await setLogin()));
  }
}

export const actionConfirmUserAsync = () => {
  return async (dispatch) => {
    const refreshUser = async () => {
      try {
        const response = await axiosInstance.get('/auth/confirm', {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
          }
        });

        localStorage.setItem('token', response.data.user.accessToken);

        console.log('actionConfirmUserAsync— try —-----------------------------');
        console.log(response);

        return {
          user: response.data.user,
          error: null,
          isAuth: true,
        }
      } catch (error) {
        console.log('actionConfirmUserAsync— catch — ERROR —-------------------');
        console.log(error);
        return {
          user: {},
          error: null,
          isAuth: false,
        }
      }
    }

    dispatch(actionLogin(await refreshUser()));
  }
}