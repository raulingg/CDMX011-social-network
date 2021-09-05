/* eslint-disable import/no-cycle */
import { getAllPost } from '../lib/firebase.js';
import { onNavigate } from '../router/routes.js';
import { cardTemplete } from './cardPost.js';

export const viewTimeLine = () => {
  const html = `
    <div class="container timeline">
    </div>
    <div id="menu">
      <button id="toCreate"><i class="fas fa-pencil-alt"></i></button>
      <button id="toPostList"><i class="fas fa-list-ul"></i></button>
      <button id="signOut"><i class="fas fa-sign-out-alt"></i></button>
    </div>
    `;

  const divElement = document.createElement('div');
  divElement.setAttribute('id', 'timeLineContainer');
  divElement.innerHTML = html;

  const toCreate = divElement.querySelector('#toCreate');
  toCreate.addEventListener('click', () => {
    onNavigate('/create-post');
  });

  const toPostList = divElement.querySelector('#toPostList');
  toPostList.addEventListener('click', () => {
    onNavigate('/timeline');
  });

  const cardsContainer = divElement.querySelector('.timeline');
  const getPost = async () => {
    const allpost = await getAllPost();
    allpost.forEach((post) => {
      const card = cardTemplete(post);
      cardsContainer.appendChild(card);
    });
  };
  getPost();

  return divElement;
};
