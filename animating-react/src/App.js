import React, { useState } from 'react';

import Modal from './components/Modal/Modal';
import List from './components/List/List';

import './App.css';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };

  return (
    <div className='App'>
      <h1>React Animations</h1>
      <Modal
        show={showModal}
        hideModalHandler={hideModalHandler} />
      <button className='Button' onClick={showModalHandler}>Open Modal</button>
      <h3>Animating Lists</h3>
      <List />
    </div>
  );
}

export default App;
