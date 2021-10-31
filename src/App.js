import React from 'react';
import './App.css';

import Add from './components/addNumbers/add';
import Show from './components/showNumbers/show';

const App = () => {
  return (
    <div className='bg-gray-300 App' >
      <Add />
      <Show />
    </div>
  );
}

export default App;
