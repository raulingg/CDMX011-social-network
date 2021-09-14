export const updateCard = (post) => `
          <h3 class="header-card">Por culpa de</h3>
          <h2 class="singer-name">${post.singer}</h2>
          <h1 class="song-sentence">${post.song}</h1>
          <i class="fas fa-heart" id="likePost">${post.likes.length}</i>
          <div class="options-post">
              <i class="fas fa-pencil-alt"></i>
              <i class="fas fa-trash-alt"></i>
          </div>
      `;
