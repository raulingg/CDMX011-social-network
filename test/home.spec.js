/**
 * @jest-environment jsdom
 */

import { Home } from '../src/components/home';

describe('Pruebas del home', () => {
  const renderHome = Home();

  it('test para verificar que exista el botón de registro', () => {
    const buttonRegister = renderHome.querySelector('#register');
    expect(buttonRegister.outerHTML).toBe('<button id="register">Regístrate</button>');
  });
});
