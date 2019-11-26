import '../sass/main.scss';
import Search from './models/Search';
import * as searchView from './views/searchView';
import { renderLoader, clearLoader, elments } from './views/base';

/** Global state of the app
 * - Search Object
 */
const state = {};

export const ControlSearch = async query => {
  // 1) Check Query
  if (query) {
    // 2) New search object to state
    state.search = new Search(query);

    // 3) Prepare ui for results
    searchView.clearMain();

    renderLoader(elments.body);
    // 4) Get user stats
    await state.search.getStats();
    if (state.search.data.error) {
      return alert('error');
    }
    // 5) Render results on UI
    clearLoader(element.body);
    searchView.renderStats(state.search.data);
  }
};

elments.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  const query = searchView.getInput();
  ControlSearch(query);
});
elments.searchNav.addEventListener('submit', e => {
  e.preventDefault();
  const query = searchView.getNavInput();
  ControlSearch(query);
});
