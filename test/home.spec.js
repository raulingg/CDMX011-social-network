/**
 * @jest-environment jsdom
 */

import { Home } from '../src/components/home';

describe('Pruebas del home', () => {
  it('test de botón registrarse', async () => {
    const chanceRoute = await Home();
    console.log(chanceRoute);
  });
});
