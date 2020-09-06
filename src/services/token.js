import {session} from './storage';

const AUTH_TOKEN_KEY = 'AUTH_TOKEN_LEARNING';

export const saveTokenInfo = token => session.setItem(AUTH_TOKEN_KEY, token);
export const getTokenInfo = () => session.getItem(AUTH_TOKEN_KEY);
export const clearToken = () => session.clear(AUTH_TOKEN_KEY);
