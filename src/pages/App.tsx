import React from 'react';
import { useState, useEffect } from 'react';
import GetListPost from '../actions/GetListPost';
import { CardsPosts, PostProps } from '../components/CardsPosts';
import { ModalForm } from '../components/ModalForm';
import { Navbar } from '../components/Navbar';
import './styles.css';

export const App = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [listOfPost, setListOfPost] = useState<PostProps[]>([]);

  const fetchAllPosts = async () => {
    const response = await GetListPost.getListPost();
    setListOfPost(response);
    console.log(response);
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

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
