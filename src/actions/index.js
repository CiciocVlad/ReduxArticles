import { ADD_ARTICLE, ADD_AUTHOR, ARTICLES_RETRIEVED } from '../constants/action-types';

const addArticle = (payload) => {
  return { type: ADD_ARTICLE, payload };
}

const articlesRetrieved = (payload) => {
  return { type: ARTICLES_RETRIEVED, payload };
}

const addAuthor = payload => {
	return { type: ADD_AUTHOR, payload }
}

export { addArticle, articlesRetrieved, addAuthor };
