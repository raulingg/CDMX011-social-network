import { Home } from '../components/home.js';

const app = document.getElementById('app');

export const router = (route) => {
  app.innerHTML = '';
  switch (route) {
    case '': {
      return app.appendChild(Home());
    }

    default:
      return console.log('404');
  }
};
