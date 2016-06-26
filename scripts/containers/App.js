import React from 'react';
// import configureStore from '../store/configureStore';
 import Counter from './../components/Counter';
 import Constants from './../constants/constants';

// const store = configureStore();

export default React.createClass({
  render() {
    console.log(Constants);
    return (
      <Counter />
    );
  }
});
