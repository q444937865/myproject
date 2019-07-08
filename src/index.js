import React from 'react';
import ReactDom from 'react-dom';

import Routes from './router/router';
import { createStore } from 'redux' 
import { Provider, connect } from 'react-redux';
import reducer from './store'

//创建store
const store = createStore(reducer);
console.log(store.getState())

ReactDom.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);