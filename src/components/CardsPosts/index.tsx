import React, { useContext, useState } from 'react';
import moment from 'moment';
import './styles.css';
import deleteIcon from '../../assets/delete.png';
import { ApplicationContext } from '../../context/Application/ApplicationContext';
import { PopupDelete } from '../PopupDelete';

export type PostProps = {
  id: number;
  username: string;
  created_datetime: string;
  title: string;
  content: string;
};

export const CardsPosts = (props: PostProps) => {
  var formatedDate = moment(props.created_datetime, moment.ISO_8601).format('MMMM Do YYYY, h:mm:ss a');
  const {userName} = useContext(ApplicationContext);
  const [openPopupDelete, setOpenPopupDelete] = useState(false);

  return (
    <>
      <div className='cardPosts'>
        <div className='titleCard'>
          <h1 className='titlePost'>{props.title}</h1>
          {userName === props.username ? 
            (<button 
                className='deleteButton'
                onClick={() => setOpenPopupDelete(true)}>
                  <img 
                    className='imgDelete' 
                    src={deleteIcon} 
                    alt='delete'/>
              </button>)
          : null
          }
          </div>
        <div className='userAndTime'>
          <h4 className='userNameH4'>@{props.username}</h4>
          <h4 className='timePostsH4'>{formatedDate}</h4>
        </div>
        <br />
        <div className='textContent'>
          <p>{props.content}</p>
        </div>
      </div>
      <PopupDelete idPostDelete={props.id} trigger={openPopupDelete} setTrigger={setOpenPopupDelete}/>
    </>
  );
};
