import { popularPlayers } from './../config';
class Favorite {
  constructor() {
    this.favorites = {
      recent: ['Gz_Proxn', 'Gz_Cyber'],
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
