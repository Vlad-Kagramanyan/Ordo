import React, { Component } from 'react';
import Main from './app/Containers/Main';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './app/store/reducers/index';
import Home from './app/Containers/Home';

const store = createStore(reducer, applyMiddleware(thunk));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}


