import { sortStats } from './../helper';
import { ControlSearch } from './../app';
const searchInput = document.querySelector('.search__content--input');
const main = document.querySelector('.main');
export const getInput = () => searchInput.value;

export const clearMain = () => {
  main.innerHTML = '';
  searchInput.value = '';
};

const backToHome = e => {
  e.preventDefault();
  clearMain();
  renderSearch();
  const searchForm = document.getElementById('searchForm');
  searchForm.addEventListener('submit', ControlSearch, true);
};

const renderSearch = () => {
  const markup = `<section class="search">
    <div class="search__title">
        <h2>CHECK PLAYER RANKS AND STATS</h2>
    </div>
    <div class="search__content">
        <form id="searchForm">
            <input placeholder="Enter your epic name..." class="search__content--input" type="text">
            <button id="searchBtn" class="btn btn__search">Search</button>
        </form>
    </div>
  </section>`;
  document.querySelector('.main').insertAdjacentHTML('beforeend', markup);
};
const renderOverviewStats = el => {
  const { key } = el;
  let subtitle = '';
  let title = '';
  if (key === 'Wins' || key === 'Score' || key === 'Kills') {
    title = key;
    subtitle = 'Total';
  } else if (key === 'K/d') {
    title = 'kills';
    subtitle = 'Per Death';
  } else if (key === 'Win%') {
    subtitle = 'Average';
    title = 'Win Rate';
  } else {
    title = 'Matches';
    subtitle = 'Played';
  }

  return `
        <div class="overviewCard">
            <div>
                <p class="overviewCard__subtitle">${subtitle}</p>
                <p class="overviewCard__title">${title}</p>
            </div>
            <div>
                <p class="overviewCard__value">${el.value}</p>
            </div>
            <div class="overviewCard__rank">
                <p>#400</p>
            </div>
        </div>
  `;
};

const createOverviewCard = lifetime => {
  const sorted = lifetime.sort((a, b) => {
    if (a.key > b.key) return -1;
    if (a.key < b.key) return 1;
    return 0;
  });

  const lifetimeStats = sorted.map(el => {
    if (!el.key.startsWith('Top')) return renderOverviewStats(el);
  });
  return lifetimeStats.join('');
};

const renderStatField = el => {
  return `
  <div class="playlist__field">
    <p class="playlist__title">${el.label}</p>
    <p class="playlist__value">${el.displayValue}</p>
    <div class="playlist__bar">
        <div style="width:${el.percentile}%"></div>
    </div>
  </div>
`;
};

const createField = el => {
  const sorted = sortStats(el);
  const playlistStats = sorted.map(el => {
    return renderStatField(el);
  });

  return playlistStats.join('');
};

const renderPlaylistCard = (el, type) => {
  return `
  <div class="playlist__card">
    <div class="playlist__header ${type}">
        <h4 class="playlist__type">${type}</h4>
        <p class="playlist__matches">${
          el['matches'].displayValue
        } <span>matches</span></p>
    </div>
    <div class="playlist__body">
    ${createField(el)}
    </div>
   </div> 
  `;
};

export const renderStats = data => {
  const markup = ` 
  <section class="userContainer"> 
    <section class="userHeader">
    <div class="userHeader__inner">
        <div class="userHeader__avatar">
            <img
                src='https://d6d90m6b4vcx.cloudfront.net/prod/master-b5800d5d/react-fortnite/def_ava/def_ava10.png'>
        </div>
        <h2 class="userHeader__playerName">${data.epicUserHandle}</h2>
        <div class="userHeader__back">
        <button id="tes" class="btn btn__back">Back to home page</button>
        </div>
    </div>

    </section>

    <section class="statsOverview">
      <h1 class="statsOverview__heading">stats Overview</h1>
      <div class="gridContainer">
      ${createOverviewCard(data.lifeTimeStats)}
      </div>
    </section>
    <section class="playlist">
    <div class="gridContainer">
    ${renderPlaylistCard(data.stats.p2, 'solo')}
    ${renderPlaylistCard(data.stats.p10, 'duos')}
    ${renderPlaylistCard(data.stats.p9, 'squad')}

    </div>
    </section>
  </section>
  `;

  document.querySelector('.main').insertAdjacentHTML('beforeend', markup);
  const btnBack = document.getElementById('tes');
  const searchForm = document.getElementById('searchForm');

  btnBack.addEventListener('click', backToHome);
  searchForm.removeEventListener('submit');
};
