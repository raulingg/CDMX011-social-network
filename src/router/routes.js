/* eslint-disable import/no-cycle */
import { Home } from '../components/home.js';
import { Login } from '../components/login.js';
import { Register } from '../components/register.js';
import { viewTimeLine } from '../components/timeline.js';
import { createPost } from '../components/createPost.js';

const rootDiv = document.getElementById('root');

export const routes = {
  '/': Home,
  '/login': Login,
  '/register': Register,
  '/timeline': viewTimeLine,
  '/create-post': createPost,
};

const component = routes[window.location.pathname];
rootDiv.appendChild(component());

/* window.onload = () => {
  rootDiv.appendChild(component());
};
 */
export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[pathname]());
};

window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[window.location.pathname]());
};
