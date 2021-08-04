import React, {useContext} from 'react';
import Post from '../../actions/Post';
import { ApplicationContext } from '../../context/Application/ApplicationContext';
import './styles.css';

type PropsType = {
  trigger: boolean;
  setTrigger: (value: boolean) => void;
  idPostDelete: number;
};

export const PopupDelete = ({trigger, setTrigger, idPostDelete}: PropsType) => {
  const {setCallFetch, callFetch} = useContext(ApplicationContext);

  const onClickDelete = async () => {
    await Post.deletePost(idPostDelete);
    setCallFetch(!callFetch);
  };

  return(trigger) ? (
    <div className='popup'>
      <div className='popup-inner'>
        <h3>Are you sure you want to delete this item?</h3>
        <button onClick={() => setTrigger(false)}>Cancel</button>
        <button onClick={onClickDelete}>OK</button>
      </div>
    </div>
  ) : null;
}