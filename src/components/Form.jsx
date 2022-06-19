import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v1 as uuidv1 } from 'uuid';
import { addArticle, addAuthor } from '../actions';

const Form = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value } = e.target
    setTitle(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv1();
    dispatch(addArticle({ id, title }));
    setTitle('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          className='form-control'
          id='title'
          value={title}
          onChange={handleChange}
        />
      </div>
      <input className='btn btn-success btn-lg' type='submit' value='SAVE' />
    </form>
  );
}

export default Form;
