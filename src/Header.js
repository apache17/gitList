import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Header extends Component {
  render(){
    const { handleBack } = this.props;
    return (
      <div className="header">
        {
          handleBack && 
          (
            <button type="submit" className="BackButton" onClick={handleBack}>
              <span className="fa fa-arrow-circle-left"/>
            </button>
          )
        }
        <p className="logo">{this.props.title}</p>
      </div>
    );
  }
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  handleBack: PropTypes.func
}
export default Header;