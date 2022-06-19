import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from '../thunk';
import { addAuthor } from '../actions';
import modules from '../style/list.module.css';

const List = () => {
  const articles = useSelector((state) => state.articles);
  const dispatch = useDispatch();
  const [item, setItem] = useState({});
  const [value, setValue] = useState('');
  const [display, setDisplay] = useState('none');

  useEffect(() => {
    dispatch(fetchArticles);
  }, []);

  const handleClick = () => {
    item['author'] = value;
    dispatch(addAuthor({ payload: item }));
    setDisplay('none');
  };

  return (
    <ul className="list-group list-group-flush">
      <div style={{ display }}>
        <input onChange={(e) => setValue(e.target.value)} />
        <button onClick={handleClick}>Add</button>
      </div>
      {articles.map((article) => (
        <div key={article.id}>
          <div className={modules.container}>
            <li
              className="list-group-item"
              onClick={() => {
                setDisplay('flex');
                setItem(article);
              }}
              style={{ cursor: 'pointer' }}
            >
              {article.title}
            </li>
            <li className={modules.list}>{article?.author && `Author ${article.author}`}</li>
          </div>
        </div>
      ))}
    </ul>
  );
};

export default List;
