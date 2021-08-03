import React from 'react'
import './styles.css';

type PropsType = {
  titleModal: string;
  labelButton: string;
}

export const ModalForm = (props: PropsType) => {
  return (
    <div className='createPost'>
      <h1>{props.titleModal}</h1>
      <h3 className='h3First'>Title</h3>
      <input type="text" placeholder='Hello world'/>
      <h3 className='h3Last'>Content</h3>
      <input className='content' type="text" placeholder='Content here'/>
      <button>{props.labelButton}</button>
    </div>
  );
};