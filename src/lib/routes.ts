// adjust this routes object to your needs
export const routes = {
  home: '/',
  dashboard: '/dashboard',
  users: '/users',
  login: '/login',
  userDetails: (id: string) => `/users/${id}`,
};
