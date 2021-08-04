import React, { useState, useEffect, useContext } from 'react';
import GetListPost from '../../actions/GetListPost';
import { CardsPosts, PostProps } from '../../components/CardsPosts';
import { ModalForm } from '../../components/ModalForm';
import { Navbar } from '../../components/Navbar';
import { ApplicationContext } from '../../context/Application/ApplicationContext';
import './styles.css';

export const MainPage = () => {
  const {callFetch} = useContext(ApplicationContext);
  const [listOfPost, setListOfPost] = useState<PostProps[]>([]);

  const fetchAllPosts = async () => {
    const response = await GetListPost.getListPost();
    setListOfPost(response);
  };

  useEffect(() => {
    fetchAllPosts();
  }, [callFetch]);

  return (
    <>
      <Navbar/>
      <div className='modalCreateForm'>
        <ModalForm titleModal={`What's on your mind?`} labelButton='CREATE'/>
      </div>
      {listOfPost.map((post: PostProps) => {
        return(
        <div className='modalPost'>
          <CardsPosts 
            key={post.id} 
            title={post.title} 
            content={post.content} 
            username={post.username} 
            created_datetime={post.created_datetime}/>
        </div>
        );
      })}
    </>
  );
};
