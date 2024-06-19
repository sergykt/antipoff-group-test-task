export const baseUrl = 'https://reqres.in/api';

export const routes = {
  users: '/users',
  signUp: '/register',
} as const;

export const fetchRoute = (url: string) => `${baseUrl}${url}`;
