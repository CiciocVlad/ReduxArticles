import { ADD_ARTICLE, ARTICLES_RETRIEVED, ADD_AUTHOR } from '../constants/action-types';

const initialState = {
  articles: [],
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_ARTICLE: {
      return Object.assign({}, state, {
        articles: state.articles.concat(payload),
      });
    }

    case ARTICLES_RETRIEVED: {
      return Object.assign({}, state, {
        articles: state.articles.concat(payload),
      });
    }

    case ADD_AUTHOR: {
      return Object.assign({}, state, {
        articles: state.articles.filter((article) => article.id !== payload.id).concat(payload),
      });
    }

    default:
      return state;
  }
};

export default rootReducer;
