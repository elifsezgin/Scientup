import React from 'react';
import {Provider} from 'react-redux';
import App from './app';
import {Router, Route, IndexRoute, IndexRedirect, hashHistory} from 'react-router';
import WelcomeContainer from './welcome/welcome_container';
import HomeContainer from './home/home_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import GroupDetailContainer from './groups/group_detail_container';
import NewGroupContainer from './groups/new_group_container';

const Root = ({store}) => {
  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if(!currentUser) {
      replace('/welcome');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/home');
    }
  };

  return (
    <Provider store={store} >
      <Router history={hashHistory} >
        <Route path="/" component={App}>
          <IndexRedirect to='/home' />
          <Route
            path='welcome'
            component={ WelcomeContainer }
            onEnter={_redirectIfLoggedIn} >
          </Route>
          <Route
            path='home'
            component={ HomeContainer }
            onEnter={_ensureLoggedIn} />
          <Route
            path='groups/new'
            component={ NewGroupContainer }
            onEnter={_ensureLoggedIn} />
          <Route
            path='groups/:groupId'
            component={ GroupDetailContainer }
            onEnter={_ensureLoggedIn}  />

        </Route>
      </Router>
    </Provider>
  );
};


export default Root;
