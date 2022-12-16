import axios from './Interceptors'
import { clientStorage } from 'common/utils/clientStorage';

/**
 * Sử dụng setoken nếu cần thiết
 * @param token
 */
export const setToken = async (token = '') => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const clearToken = async () => {
  axios.defaults.headers.common['Authorization'] = '';
};

const requestAboutCode = 'ECONNABORTED';

axios.defaults.baseURL = process.env.REACT_APP_API_GATEWAY;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.timeout = 360000;

const RequestClient = class {
  constructor() {
    let access_token = clientStorage.get('accessToken');
    if (access_token) {
      this.init(access_token);
    } else {
      this.init('');
    }
  }

  async init(access_token: string) {
    axios.defaults.headers.common['Authorization'] = access_token;
  }
  async headers(params: any) {
    let keys = Object.keys(params);

    keys.forEach(key => {
      axios.defaults.headers.common[key] = params[key];
    });
  }
  async get(endpoint: string, params = {}) {
    return await axios
      .get(endpoint, { params: params })
      .then(values => {
        return values;
      })
      .catch(error => {
        return error.response;
      });
  }

  async post(endpoint: string, body: {}, params = {}) {
    return await axios
      .post(endpoint, body, { params: params })
      .then(values => {
        return values;
      })
      .catch(error => {
        return error.response;
      });
  }

  async put(endpoint: string, body: {}, params = {}) {
    return await axios
      .put(endpoint, body, { params: params })
      .then(values => {
        return values;
      })
      .catch(error => {
        return error.response;
      });
  }

  async delete(endpoint: string, data?: {}) {
    return await axios
      .delete(endpoint, { data: data })
      .then(values => {
        return values;
      })
      .catch(error => {
        return error.response;
      });
  }
  async upload(endpoint: string, file: any) {
    let formData = new FormData();
    formData.append('file', file);
    return await axios
      .post(endpoint, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(values => {
        return values;
      })
      .catch(error => {
        return error.response;
      });
  }
  handleError(error: any) {
    if (error.response && error.response.status === 401) {
      // xử lý logout đoạn này
    }
    if (error.code === requestAboutCode || ('response' in error && error.response === undefined)) {
      // delay(1000);
      error.recall = true;
    }
    // throw error;
  }
};

const client = new RequestClient();

export { client };
