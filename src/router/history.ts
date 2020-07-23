import { createBrowserHistory } from 'history';

let history: any = null;



export function createHistory(basename: string) {
  history = createBrowserHistory({ basename });
  return history;
}

export function getHistory() {
  return history;
}