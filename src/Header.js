import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <input type="text" placeholder="Enter Github Username"></input>
      <i className="fa fa-check-circle" aria-hidden="true"></i>
    </div>
  );
};

export default Header;