/* eslint-disable import/no-cycle */
import { publishPost } from '../lib/firebase.js';
import { onNavigate } from '../router/routes.js';

export const createPost = () => {
  const html = `
    <div class="container create-post">
      <form id="postForm">
        <label for="singer">Por culpa de: </label>
        <input id="singer" name="singer" type="text">

        <label for="song">Fragmento de canción:</label>
        <textarea name="song" id="song" cols="30" rows="10"></textarea>

        <button id="publish">PUBLICAR</button>
      </form>

      <div id="menu">
    <button id="toCreate"><i class="fas fa-pencil-alt"></i></button>
    <button id="toPostList"><i class="fas fa-list-ul"></i></button>
    <button id="signOut"><i class="fas fa-sign-out-alt"></i></button>
    </div>
    </div>
    `;
  // observer(onNavigate);

  const divElement = document.createElement('div');
  divElement.setAttribute('id', 'create');
  divElement.innerHTML = html;

  const publish = divElement.querySelector('#publish');

  publish.addEventListener('click', async (e) => {
    const singer = divElement.querySelector('#singer').value;
    const song = divElement.querySelector('#song').value;
    e.preventDefault();
    await publishPost(singer, song);
  });

  const toCreate = divElement.querySelector('#toCreate');
  toCreate.addEventListener('click', () => {
    onNavigate('/create-post');
  });

  const toPostList = divElement.querySelector('#toPostList');
  toPostList.addEventListener('click', () => {
    onNavigate('/timeline');
  });

  return divElement;
};
