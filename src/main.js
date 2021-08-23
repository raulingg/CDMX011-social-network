import { onNavigate, routes } from './router/routes.js';

const rootDiv = document.getElementById('root');
const homeViewFunction = routes[window.location.pathname];
homeViewFunction(rootDiv);

/* toHome.addEventListener('click', () => {
  onNavigate('/');
});
 */
