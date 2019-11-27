import { popularPlayers } from './../config';
class Favorite {
  constructor() {
    this.favorites = {
      recent: [],
      favorite: [],
      popular: popularPlayers
    };
  }

  addPlayerToFavorite(name) {
    this.favorites.favorite.push(name);
    this.setLocalStorage();
  }
  isAddedToFavorite(name) {
    return this.favorites.favorite.findIndex(el => el === name) !== -1;
  }

  addRecentPlayer(name) {
    const exist = this.favorites.recent.findIndex(el => el === name) !== -1;
    if (exist) return;
    if (this.favorites.recent.length > 7) {
      this.favorites.recent[0] = name;
    } else {
      this.favorites.recent.push(name);
    }
    this.setLocalStorage();
  }

  removeFavoritePlayer(name) {
    this.favorites.favorite = this.favorites.favorite.filter(el => el !== name);
    this.setLocalStorage();
  }

  setLocalStorage() {
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  readLocalStorage() {
    const storage = JSON.parse(localStorage.getItem('favorites'));
    if (storage) this.favorites = storage;
  }
}

export default Favorite;
