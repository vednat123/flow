const STORAGE_KEY = 'flow_polls';

export function loadPolls() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
}

export function savePoll(poll) {
  const all = loadPolls();
  all.unshift(poll);                 
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
}
