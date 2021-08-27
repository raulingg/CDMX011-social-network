import { Home } from './views/Home.js';
import { Login } from './views/Login.js';
import { render } from './utils.js';

const routes = {
  '/': Home,
  '/login': Login,
};

const dispatchRoute = (pathname = '/') => {
  const root = document.getElementById('root');
  const component = routes[pathname];
  render(root, component());
};

document.addEventListener('load', dispatchRoute);

export const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  dispatchRoute(pathname);
};

window.addEventListener('popstate', () => {
  dispatchRoute(window.location.pathname);
});
