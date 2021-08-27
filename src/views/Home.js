import { getUser } from '../firebaseClient.js';

export const Home = () => {
  const user = getUser();
  const container = document.createElement('div');

  const html = `
    <h2>Login ${user ? user.email : ''}<h2>
    `;

  container.innerHTML = html;

  return container;
};
