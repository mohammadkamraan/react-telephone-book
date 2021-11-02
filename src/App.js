import React from 'react';
import './App.css';

import Add from './components/Contacts/add';
import Show from './components/Contacts/show';

const App = () => {
  return (
    <div className='App' >
      <Add />
      <Show />
    </div>
  );
}

export default App;
