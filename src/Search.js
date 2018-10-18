import React from 'react';

const Search = () => {
  return (
    <div className="search">
      <input type="text" placeholder="Enter Github Username"></input>
      <i id="icon" className="fa fa-check-circle" aria-hidden="true"></i>
    </div>
  );
};

export default Search;