import { dispatchRoute } from './routes';

window.addEventListener('load', () => {
  dispatchRoute('/');
});

window.addEventListener('popstate', () => {
  dispatchRoute(window.location.pathname);
});
