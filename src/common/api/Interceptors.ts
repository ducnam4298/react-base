import axios, { AxiosResponse } from 'axios';
import { Endpoint } from './endpoint';
// import { store } from 'index';
// import { ActionType } from 'store/context';
// import { SwitchAuthenticated } from 'models/context';
import { clientStorage } from '../utils/clientStorage';

axios.interceptors.response.use(
  res => res,
  async error => {
    let originalRequest = error.config;
    if (error.response && error.response.status === 401) {
      let urlRefreshToken = originalRequest.url.split('/');
      urlRefreshToken = urlRefreshToken[urlRefreshToken.length - 1];
      if (urlRefreshToken === 'refreshtoken') {
        handleError();
      } else {
        const refreshToken = clientStorage.get('rt-flash');

        if (refreshToken) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${refreshToken}`;

          const res: AxiosResponse<any> = await axios.post(`${Endpoint.REFRESH_TOKEN}`, {
            oldToken: clientStorage.get('sp-flash'),
          });
          if (res.status === 200) {
            clientStorage.set('sp-flash', res.data.accessToken);
            clientStorage.set('rt-flash', res.data.refreshToken);

            setToken(res.data.accessToken);

            originalRequest.headers['Authorization'] = `Bearer ${res.data.accessToken}`;
            return axios(originalRequest);
          }
        } else {
          handleError();
        }
      }
    }
    return Promise.reject(error);
  }
);
export const setToken = async (token = '') => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const clearToken = async () => {
  axios.defaults.headers.common['Authorization'] = '';
};
const handleError = () => {
  clientStorage.remove('sp-flash');
  clientStorage.remove('rt-flash');
  sessionStorage.clear();
  clearToken();
  // store.dispatch({
  //   type: ActionType.SWITCH_AUTHENTICATED,
  //   action: SwitchAuthenticated.LOGGEDOUT,
  // });
  // store.dispatch({
  //   type: 'Signin',
  //   payload: { params: { msg: 'SigninAgain' } },
  // });
};

export default axios;
