import React, { SyntheticEvent } from 'react'
import { useState, useContext } from 'react';
import Post from '../../actions/Post';
import { ApplicationContext } from '../../context/Application/ApplicationContext';
import './styles.css';

type PropsType = {
  titleModal: string;
  labelButton: string;
  idEdit?: number;
  titleEdit?: string;
  contentEdit?: string;
  children?: React.ReactNode;
}

export const ModalForm = ({titleModal, labelButton, idEdit, titleEdit, contentEdit, children}: PropsType) => {
  const {userName, setCallFetch, callFetch} = useContext(ApplicationContext);
  const [idPost, setIdPost] = useState(idEdit ? idEdit : 0);
  const [title, setTitle] = useState(titleEdit ? titleEdit : '');
  const [content, setContent] = useState(contentEdit ? contentEdit : '');

  const clearForm = () => {
    setIdPost(0);
    setTitle('');
    setContent('');
  };

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    if(idPost !== 0) {
      await Post.editPost(idPost, title, content);
    } else {
      await Post.createPost({
        userName,
        title,
        content,
      });
    }

    setCallFetch(!callFetch);
    clearForm();
  };

  return (
    <div className='createPost'>
        <h1>{titleModal}</h1>
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
        <button onClick={handleSubmit}>{labelButton}</button>
        {children}
    </div>
  );
};