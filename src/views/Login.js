import { signIn } from '../firebaseClient.js';
import { onNavigate } from '../routes.js';

export const Login = () => {
  const container = document.createElement('div');

  const html = `
    <form id="signInForm">
        <label for="email">E-mail</label>
        <input id="email" type="email">
        <label for="password">Password</label>
        <input id="password" type="password">
        <input id="signInBtn" type="submit" value="Sign In">
        <p id="errorMessage"></p>
    </form>
    `;

  container.innerHTML = html;

  container.querySelector('#signInBtn').addEventListener('click', (event) => {
    event.preventDefault();

    const email = container.querySelector('input[type=email]').value;
    const password = container.querySelector('input[type=password]').value;

    signIn(email, password)
      .then(() => onNavigate('/wall'))
      .catch((error) => {
        container.querySelector('#errorMessage').innerHTML = error.message;
      });
  });

  return container;
};
