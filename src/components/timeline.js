/* eslint-disable import/no-cycle */
import { getAllPost } from '../lib/firebase.js';
import { onNavigate } from '../router/routes.js';
import { cardTemplete } from './cardPost.js';
// import { updateCard } from './updateCard.js';
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
    await getAllPost((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          const post = change.doc.data();
          post.id = change.doc.id;
          const card = cardTemplete(post);
          cardsContainer.appendChild(card);
        }
        if (change.type === 'modified') {
          const post = change.doc.data();
          post.id = change.doc.id;
          const cardId = `${change.doc.id}`;
          const card = cardsContainer.querySelector(`[id="${cardId}"]`);
          console.log('algo se cambio');
          const song = card.querySelector('.song-sentence');
          const likes = card.querySelector('.fa-heart');
          song.innerHTML = post.song;
          likes.innerHTML = post.likes.length;
          // card.innerHTML = updateCard(post);
          // console.log('Modified city: ', change.doc.data());
        }
        if (change.type === 'removed') {
          // console.log('Removed city: ', change.doc.data());
        }
      });
    });
    /* const allpost = await getAllPost();
    allpost.forEach((post) => {
      const card = cardTemplete(post);
      cardsContainer.appendChild(card);
    }); */
  };
  getPost();

  return divElement;
};