import { elements, deleteIcon, starIcon, starIcon2 } from './base';

export const clearBody = () => {
  document.querySelector('.favorite__body').innerHTML = '';
};

export const toggleFavoriteBtn = (target, isFavorite) => {
  if (isFavorite) {
    // target.classList.add('active');
    target.innerHTML = '';
    target.innerHTML = starIcon2();
  } else {
    target.innerHTML = '';
    target.innerHTML = starIcon();
  }
};

export const tabSelected = target => {
  const resultsArr = Array.from(
    document.querySelectorAll('.favorite__tabs--link')
  );
  resultsArr.forEach(el => {
    el.classList.remove('active');
  });
  target.classList.add('active');
};

const renderIcon = isFavorite => `
    <a class="favorite__player--icon">
        ${isFavorite ? starIcon2() : starIcon()}
    </a>
`;

const renderFavoritePlayer = (player, type, isFavorite) => {
  console.log(isFavorite);
  const iconMarkup = type === 'popular' ? '' : renderIcon(isFavorite);
  const markup = `
        <div class="favorite__player">
            <a class="favorite__player--name">${player}</a>
            <div class="favorite__player--action">
                ${iconMarkup}
            </div>
        </div>
        `;
  return markup;
};

export const renderFavoriteBody = (players, type, favorites) => {
  const markup = players.map(player => {
    if (favorites.includes(player))
      return renderFavoritePlayer(player, type, true);
    return renderFavoritePlayer(player, type);
  });

  document
    .querySelector('.favorite__body')
    .insertAdjacentHTML('beforeend', markup.join(''));
};

export const renderFavorite = () => {
  const markup = `
    <div class="favorite">
    <div class="favorite__tabs">
        <a class="favorite__tabs--link active">Recent Searches</a>
        <a class="favorite__tabs--link">Favorite</a>
        <a class="favorite__tabs--link">Popular</a>
    </div>
    <div class="favorite__body">
      
    </div>
</div>
    `;

  elements.searchForm.insertAdjacentHTML('beforeend', markup);
};
