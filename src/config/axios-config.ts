import axios from 'axios';
import userStore from '../userStore';

const instance = axios.create({
  baseURL: 'https://tamagochiapi-clpsampedro.b4a.run/',
});

instance.interceptors.request.use(request => {
  const { token } = userStore.getState();

  if (token) {
    request.headers['x-access-token'] = token;
  }
  return request;
});

export default instance;
