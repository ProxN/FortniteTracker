const searchInput = document.querySelector('.search__content--input');
const main = document.querySelector('.main');
export const getInput = () => searchInput.value;

export const clearMain = () => {
  main.innerHTML = '';
};

const renderOverviewStats = el => {
  const { key, value } = el;
  let subtitle = '';

  if (key === 'Wins' || key === 'Score' || key === 'Kills') {
    subtitle = 'Total';
  } else if (key === 'K/d') {
    subtitle = 'Per Death';
  } else if (key === 'Win%') {
    subtitle = 'Average';
  } else {
    subtitle = 'Played';
  }

  return `
        <div class="overviewCard">
            <div>
                <p class="overviewCard__subtitle">${subtitle}</p>
                <p class="overviewCard__title">${key}</p>
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
  const lifetimeStats = lifetime.map(el => {
    if (!el.key.startsWith('Top')) return renderOverviewStats(el);
  });
  return lifetimeStats.join('');
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
    </div>
    </section>

    <section class="statsOverview">
      <h1 class="statsOverview__heading">stats Overview</h1>
      <div class="gridContainer">
      ${createOverviewCard(data.lifeTimeStats)}
     
      </div>

    </section>
  </section>
  
  `;

  document.querySelector('.main').insertAdjacentHTML('beforeend', markup);
};
