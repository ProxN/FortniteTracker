import '../sass/main.scss';
import Search from './models/Search';
import * as searchView from './views/searchView';
const searchForm = document.getElementById('searchForm');

const state = {};

export const ControlSearch = async e => {
  e.preventDefault();
  // 1) Get query from views
  const query = searchView.getInput();

  if (query) {
    // 2) New search object to state
    state.search = new Search(query);

    // 3) Get user stats
    await state.search.getStats();
    if (state.search.data.error) {
      return alert('error');
    }
    // 4) Prepare ui for results
    searchView.clearMain();
    // 5) Render results on UI
    searchView.renderStats(state.search.data);
  }
};

searchForm.addEventListener('submit', ControlSearch, true);
