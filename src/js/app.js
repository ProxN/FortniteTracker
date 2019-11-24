import '../sass/main.scss';
import Search from './models/Search';
import * as searchView from './views/searchView';

const searchForm = document.getElementById('searchForm');
const body = document.getElementById('test');

const state = {};

const ControlSearch = async e => {
  e.preventDefault();
  // 1) Get query from views
  const query = searchView.getInput();

  if (query) {
    // 2) New search object to state
    state.search = new Search(query);

    // 3) Prepare ui for results
    searchView.clearMain();

    // 4) Get user stats
    await state.search.getStats();
    if (state.search.data.error) {
      alert('error');
    }

    // 5) Render results on UI
    searchView.renderStats(state.search.data);
    // body.style.height = 'max-content';
    // document.querySelector('html').style.height = 'max-content';
  }
};

searchForm.addEventListener('submit', ControlSearch, true);
