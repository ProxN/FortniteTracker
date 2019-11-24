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
