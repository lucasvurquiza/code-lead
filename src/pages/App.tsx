import React from 'react';
import { CardsPosts } from '../components/CardsPosts';
import { ModalForm } from '../components/ModalForm';
import { Navbar } from '../components/Navbar';
import './styles.css';

function App() {
  return (
    <>
      <Navbar/>
      <div className='modalCreateForm'>
        <ModalForm titleModal={`What's on your mind?`} labelButton='CREATE'/>
      </div>
      <div className='modalPost'>
      <CardsPosts />
      </div>
    </>
  );
}

export default App;
