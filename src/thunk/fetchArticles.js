import { ARTICLES_RETRIEVED } from '../constants/action-types';

const fetchArticles = async (dispatch, getState) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
  dispatch({ type: ARTICLES_RETRIEVED, payload: data })
};

export default fetchArticles;
