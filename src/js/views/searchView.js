import { sortStats, sortLifeTimeStats } from './../helper';
import { elments } from './base';

export const getInput = () => elments.searchInput.value;

export const getNavInput = () => elments.navInput.value;

export const clearMain = () => {
  elments.main.innerHTML = '';
  elments.searchInput.value = '';
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

const createOverviewCard = lifetime => {
  const sortedArr = sortLifeTimeStats(lifetime);

  const overViewMarkup = Object.keys(sortedArr).map(key => {
    return renderOverviewStats(key, sortedArr[key]);
  });

  return overViewMarkup.join('');
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
  elments.main.insertAdjacentHTML('beforeend', markup);
};
