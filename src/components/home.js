export const Home = () => {
  const html = `
    <h1>Hello World con JS</h1>
    `;
  const divElement = document.createElement('div');
  divElement.innerHTML = html;

  return divElement;
};
