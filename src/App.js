import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js';
import Search from './Search';

const App = () => {
  return (
    <div>
      <Header />      
      <Search />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));