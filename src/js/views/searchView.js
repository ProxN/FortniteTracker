import { sortStats, sortLifeTimeStats } from './../helper';
import { elements, images } from './base';
export const getInput = () => elements.searchInput.value;

export const getNavInput = () => elements.navInput.value;

export const clearMain = () => {
  elements.main.innerHTML = '';
  elements.searchInput.value = '';
};

const randomImage = () => {
  return images[Math.floor(Math.random() * images.length)];
};

const renderOverviewStats = (key, value) => {
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
                <p class="overviewCard__value">${value}</p>
            </div>
            <div class="overviewCard__rank">
                <p>#1</p>
            </div>
        </div>
  `;
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
  const fieldsMarkup = sorted.map(el => {
    return renderStatField(el);
  });
  return fieldsMarkup.join('');
};

const createOverviewCard = lifetime => {
  const sortedArr = sortLifeTimeStats(lifetime);

  const overViewMarkup = Object.keys(sortedArr).map(key => {
    return renderOverviewStats(key, sortedArr[key]);
  });

  return overViewMarkup.join('');
};

const renderPlaylistCard = (el, type) => `
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

export const renderErrorMessage = () => {
  const markup = `
  <div class="error">
    <h1>Player has not been found</h1>
    <h2>Please check your player name and search again.</h2>
  </div>
  `;
  elements.main.insertAdjacentHTML('beforeend', markup);
};

export const renderStats = data => {
  const markup = ` 
  <section class="userContainer"> 
    <section class="userHeader">
    <div class="userHeader__inner">
        <div class="userHeader__avatar">
            <img
                src='${randomImage()}'>
        </div>
        <h2 class="userHeader__playerName">${data.epicUserHandle}</h2>
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
  elements.main.insertAdjacentHTML('beforeend', markup);
};
