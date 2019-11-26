export const sortStats = st => {
  const defaultObj = {
    top1: null,
    kills: null,
    matches: null,
    score: null,
    winRatio: null,
    kpg: null,
    kpm: null,
    kd: null,
    scorePerMatch: null
  };

  const sorted = Object.keys(defaultObj).map(el => {
    return st[el];
  });
  return sorted;
};

export const sortLifeTimeStats = stats => {
  // // remove ['Top'] Stat from array
  const filteredStats = stats.filter(item => {
    return !item.key.includes('Top');
  });
  const defObj = {
    Wins: null,
    Kills: null,
    'Matches Played': null,
    Score: null,
    'Win%': null,
    'K/d': null
  };
  for (let stat of filteredStats) {
    defObj[stat.key] = stat.value;
  }

  return defObj;
};
