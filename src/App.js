import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js';
import Search from './Search';

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <h1>Lista de proyectos de GitHub!</h1>
      </div>
      <Search />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));