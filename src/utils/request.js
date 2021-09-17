import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 5000,
  headers: {'X-Custom-Header': 'foobar'}
});

// 封装接口

export const get = (url, params) => instance.get(url, { params: params });

export const post = (url, data) => instance.get(url, data);