import { Login } from './views/Login.js';
import { Home } from './views/Home.js';
import { render } from './utils.js';

const routes = {
  '/wall': Home,
  '/': Login,
};

export const dispatchRoute = (pathname = '/') => {
  const root = document.getElementById('root');
  const component = routes[pathname];
  render(root, component());
};

export const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  dispatchRoute(pathname);
};
