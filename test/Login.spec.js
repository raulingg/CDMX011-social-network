/**
 * @jest-environment jsdom
 */
import './globals/firebase';
import { render } from '../src/utils';
import { Login } from '../src/views/Login';

const delay = (timeInMs = 100) => new Promise((resolve) => setTimeout(resolve, timeInMs));

describe('Login', () => {
  document.body.innerHTML = '<div id="root"></div>';
  const rootDiv = document.getElementById('root');

  const fillOutAndSubmitForm = (email, password) => {
    document.getElementById('email').value = email;
    document.getElementById('password').value = password;
    document.getElementById('signInBtn').click();
  };

  it('renderiza', () => {
    render(rootDiv, Login());

    // ref: https://jestjs.io/es-ES/docs/snapshot-testing
    expect(rootDiv.innerHTML).toMatchSnapshot();
  });

  it('login al usuario exitosamente', async () => {
    const email = 'test@laboratoria.la';
    const password = '123456';
    const user = { email, uid: 'xxxxxxx' }; // un objeto dummy que representa el user

    // Generamos una promesa resuelta (exitosa) para este escenario, la cual retornara
    // nuestro objeto user dummy
    // ref: https://jestjs.io/docs/mock-function-api#mockfnmockresolvedvaluevalue
    const mockSignInWithEmailAndPassword = jest.fn();
    mockSignInWithEmailAndPassword.mockResolvedValue(user);

    // mockeamos solo los métodos necesarios de firebase.auth() para este test
    const mockFirebaseAuth = {
      signInWithEmailAndPassword: mockSignInWithEmailAndPassword,
      currentUser: user,
    };

    // La clave firebase.auth ahora sera una función que retorna un objeto con los mocks
    // cuando firebase.auth() sea invocado este retornara nuestro objeto mock mockFirebaseAuth
    firebase.auth = () => mockFirebaseAuth;

    render(rootDiv, Login());
    fillOutAndSubmitForm(email, password);

    // diferimos 100 ms la ejecución de los expects, debido a que los eventos del DOM
    // son asíncronos y no podemos saber en que momento terminara la resolución de nuestra
    // promesa signInWithEmailAndPassword. Al usar promesas dentro de nuestro test
    // nos vemos en la necesidad de hacer nuestro test asíncrono.
    // ref: https://jestjs.io/docs/asynchronous#promises
    await delay(100);

    // Comprobamos que nuestro mock del método firebase.auth().signInWithEmailAndPassword()
    // fue invocado con el email y password que usamos en el llenado del form
    // ref: https://jestjs.io/docs/next/expect#tohavebeencalledwitharg1-arg2-
    expect(mockSignInWithEmailAndPassword).toHaveBeenCalledWith(email, password);

    // Comprobamos que en el contenido de la pagina ahora aparece el email del usuario logeado
    // ref: https://jestjs.io/docs/next/expect#tocontainitem
    expect(rootDiv.innerHTML).toContain(email);
  });

  it('muestra un mensaje de error cuando las credenciales son invalidas', async () => {
    const email = 'test@laboratoria.la';
    const password = 'invalidpassword';
    const errorMessage = 'Invalid credentials!';

    // En este caso generamos una promesa rechazada que nos devuelve el error
    // ref: https://jestjs.io/docs/mock-function-api#mockfnmockrejectedvaluevalue
    const mockSignInWithEmailAndPassword = jest.fn();
    mockSignInWithEmailAndPassword.mockRejectedValue(new Error(errorMessage));

    const mockFirebaseAuth = {
      signInWithEmailAndPassword: mockSignInWithEmailAndPassword,
    };

    firebase.auth = () => mockFirebaseAuth;

    render(rootDiv, Login());
    fillOutAndSubmitForm(email, password);

    await delay(100);

    expect(mockSignInWithEmailAndPassword).toHaveBeenCalledWith(email, password);

    // Verifica si dentro del contenido HTML se encuentra el mensaje de error
    expect(rootDiv.innerHTML).toContain(errorMessage);
  });
});
