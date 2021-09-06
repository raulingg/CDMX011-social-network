/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-cycle */
import { observer, updateLike, updateUnLike } from '../lib/firebase.js';

export const cardTemplete = (post) => {
  const html = `
        <h3 class="header-card">Por culpa de</h3>
        <h2 class="singer-name">${post.singer}</h2>
        <h1 class="song-sentence">${post.song}</h1>
        <i class="fas fa-heart" id="likePost">${post.likes.length}</i>
        <div class="options-post">
            <i class="fas fa-pencil-alt"></i>
            <i class="fas fa-trash-alt"></i>
        </div>
    `;
  const divElement = document.createElement('div');
  divElement.setAttribute('class', 'card');
  divElement.setAttribute('id', `${post.id}`);
  divElement.innerHTML = html;

  const likes = post.likes;
  const postId = post.id;

  const likePost = divElement.querySelector('.fa-heart');

  const getLike = async () => {
    const uid = await observer();
    return uid;
  };

  likePost.addEventListener('click', async () => {
    const uid = await getLike();
    if (likes.includes(uid)) {
      updateUnLike(postId, uid);
      console.log('si');
      // location.reload();
    } else {
      updateLike(postId, uid);
      console.log('no');
      // location.reload();
    }
  });

  return divElement;
};