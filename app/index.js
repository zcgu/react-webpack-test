import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search';
import HomeContainer from './components/Home-container';
import MyProfileContainer from './components/MyProfile-container';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducers from './reducers';

const store = createStore(reducers);

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={HomeContainer}/>
      <Route path="/MyProfile" component={MyProfileContainer}/>
    </Router>
  </Provider> 
), document.getElementById('app'));
