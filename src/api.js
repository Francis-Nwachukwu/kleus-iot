import axios from "axios";

let store;

export const injectStore = (_store) => {
  store = _store;
};

const baseURL = process.env.REACT_APP_BASE_URL;

const request = axios.create({
  baseURL,
});

request.interceptors.request.use((config) => {
  const {
    auth: { token },
  } = store.getState();
  if (!token) {
    return config;
  } else {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  }
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error) {
      const {
        auth: { token },
      } = store.getState();
      if (error.response.status === 401 && token) {
        console.log(error);
        store.logout();
      }
    }
  }
);

export default request;
