import React, { SyntheticEvent } from 'react'
import { useState, useContext } from 'react';
import Post from '../../actions/Post';
import { ApplicationContext } from '../../context/Application/ApplicationContext';
import './styles.css';

type PropsType = {
  titleModal: string;
  labelButton: string;
}

export const ModalForm = (props: PropsType) => {
  const {userName, setCallFetch, callFetch} = useContext(ApplicationContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const clearForm = () => {
    setTitle('');
    setContent('');
  };

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    await Post.createPost({
      userName,
      title,
      content,
    });
    setCallFetch(!callFetch);
    clearForm();
  };

  return (
    <div className='createPost'>
        <h1>{props.titleModal}</h1>
        <h3 className='h3First'>Title</h3>
        <input 
          type="text" 
          placeholder='Hello world'
          value={title || ''} 
          onChange={(e) => setTitle(e.target.value)}/>
        <h3 className='h3Last'>Content</h3>
        <input 
          className='content' 
          type="text" 
          placeholder='Content here' 
          value={content || ''}
          onChange={(e) => setContent(e.target.value)}/>
        <button onClick={handleSubmit}>{props.labelButton}</button>
    </div>
  );
};