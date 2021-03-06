import '../sass/main.scss';
import Search from './models/Search';
import Favorite from './models/Favorite.js';
import Shop from './models/Store';
import * as searchView from './views/searchView';
import * as favroiteView from './views/FavoriteView';
import * as shopView from './views/shopView';

import { renderLoader, clearLoader, elements } from './views/base';

/** Global state of the app
 * - Search Object
 * - Favorite Object
 * - Shop Items
 */
const state = {};

/**
 * - Search Controller
 */
export const ControlSearch = async query => {
  // 1) Check Query
  if (query) {
    // 2) New search object to state
    state.search = new Search(query);

    // 3) Render Loader
    searchView.clearMain();
    renderLoader(elements.body);
    // 4) Get user stats
    await state.search.getStats();
    if (state.search.data.error) {
      clearLoader(elements.body);
      return searchView.renderErrorMessage();
    }
    // 5) Render results on UI

    clearLoader(elements.body);
    searchView.renderStats(state.search.data);

    // add player to recent Searches
    state.favorite.addRecentPlayer(query);
  }
};

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  const query = searchView.getInput();
  ControlSearch(query);
});
elements.searchNav.addEventListener('submit', e => {
  e.preventDefault();
  const query = searchView.getNavInput();
  ControlSearch(query);
});

/* 
# Favorite Controller
*/
const ControlFavorite = tab => {
  if (!state.favorite) state.favorite = new Favorite();

  // 1) Render FavoriteContainer if not exists
  const favoriteContainer = document.querySelector('.favorite');
  if (!favoriteContainer) favroiteView.renderFavorite();

  // 2) Prepare ui for results
  favroiteView.clearBody();

  // 3) Render results on UI
  const players = state.favorite.favorites[tab];

  const favorites = state.favorite.favorites['favorite'];
  favroiteView.renderFavoriteBody(players, tab, favorites);
};

// Show Favorite Container On input Focus
elements.searchInput.addEventListener('focus', () => {
  const favoriteContainer = document.querySelector('.favorite');
  if (!favoriteContainer) ControlFavorite('recent');
});

// remove Favorite Container
window.addEventListener('click', e => {
  const searchContainer = e.target.closest('.search__content');
  if (!searchContainer) {
    const favoriteContainer = document.querySelector('.favorite');
    if (favoriteContainer) favoriteContainer.remove();
  }
});

// Handling Active Tab
window.addEventListener('click', e => {
  if (e.target.matches('.favorite__tabs--link')) {
    favroiteView.setActiveTab(e.target);
    if (e.target.innerText === 'Favorite') {
      ControlFavorite('favorite');
    }
    if (e.target.innerText === 'Recent Searches') {
      ControlFavorite('recent');
    }
    if (e.target.innerText === 'Popular') {
      ControlFavorite('popular');
    }
  }
});

window.addEventListener('click', e => {
  const iconContainer = e.target.closest('.favorite__player--icon');
  if (iconContainer) {
    const player = iconContainer.parentNode.parentNode.children[0];

    // Player has not been added to favorite
    if (!state.favorite.isAddedToFavorite(player.innerText)) {
      // Add favorite player to  the state
      state.favorite.addPlayerToFavorite(player.innerText);

      // Toggle favorite button
      favroiteView.toggleFavoriteBtn(iconContainer, true);

      // Player has added to favorite
    } else {
      // Remove favorite player from the  state
      state.favorite.removeFavoritePlayer(player.innerText);

      // Toggle favorite button
      favroiteView.toggleFavoriteBtn(iconContainer, false);
      // Remove Favorite from ui
      iconContainer.parentNode.parentNode.remove();
    }
  }
});

// Resotre Favorite Players on page load
window.addEventListener('load', async () => {
  // Create new Favorite Object
  state.favorite = new Favorite();
  // Read LocalStorage
  state.favorite.readLocalStorage();
});

window.addEventListener('click', e => {
  const player = e.target.closest('.favorite__player--name');
  if (player) ControlSearch(player.innerText);
});

/**
 * Shop Controller
 */

const ControlShop = async () => {
  // 1) create new Shop Object

  if (!state.shop) state.shop = new Shop();

  // 2) Prepare ui for results

  searchView.clearMain();
  renderLoader(elements.body);

  // 3 ) get Shop Items
  await state.shop.getShopItems();

  // 4) render Results on ui
  clearLoader(elements.body);
  shopView.renderShop(state.shop.data);
};

document.getElementById('shop').addEventListener('click', e => {
  ControlShop();
});
