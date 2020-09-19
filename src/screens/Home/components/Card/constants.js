export const THUMB_DOWN = 'down';

export const THUMB_UP = 'up';

export function updatePercentage(data, element) {
  const storageInfo = JSON.parse(localStorage.getItem(`voteInfo-${data.id}`)) || {};
  const thumbUpStore = storageInfo.thumbUp || 0;
  const thumbDownStore = storageInfo.thumbDown || 0;
  const totalVotes = data.thumb_up + data.thumb_down + thumbUpStore + thumbDownStore;
  const vote = {
    thumbUp: +(((data.thumb_up + thumbUpStore) / totalVotes) * 100).toFixed(1),
    thumbDown: +(((data.thumb_down + thumbDownStore) / totalVotes) * 100).toFixed(1)
  };
  element.style.setProperty('--thumb-up', `${vote.thumbUp || 50}%`);
  element.style.setProperty('--thumb-down', `${vote.thumbDown || 50}%`);

  return vote;
}
