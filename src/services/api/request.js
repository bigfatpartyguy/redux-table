import axios from 'axios';
import {getTokenInfo, clearToken} from '../token';

const request = axios.create();

request.interceptors.response.use(
  config => config,
  error => {
    const errorCode = error.response.data.error.code;
    if (errorCode === 403) {
      clearToken();
      // window.location.reload();
    }
    return Promise.reject(error);
  }
);

const formatTokenHeader = (customHeaders = {}) => {
  const token = getTokenInfo();

  const headers = Object.assign(customHeaders, {
    'content-type': 'application/json',
  });

  if (!token) {
    return headers;
  }

  return Object.assign(headers, {'Access-token': token});
};

const setPathUrl = url => url;

const handleResponse = response => response.data;

class Request {
  static get(url, {params, headers} = {}) {
    return request
      .get(setPathUrl(url), {
        params,
        headers: formatTokenHeader(headers),
      })
      .then(handleResponse);
  }

  static post(url, {params, headers} = {}) {
    const {data} = params;
    return request
      .post(setPathUrl(url), data, {
        headers: formatTokenHeader(headers),
      })
      .then(handleResponse);
  }

  static put(url, {params, headers} = {}) {
    const {data} = params;
    return request
      .put(setPathUrl(url), data, {
        headers: formatTokenHeader(headers),
      })
      .then(handleResponse);
  }

  static delete(url, {headers} = {}) {
    return request
      .delete(setPathUrl(url), {
        headers: formatTokenHeader(headers),
      })
      .then(handleResponse);
  }
}

export function getInstance() {
  return request;
}

export default Request;
