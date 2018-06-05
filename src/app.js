import React from 'react';
import ReactDOM from 'react-dom';
import { Router , Route , browserHistory } from 'react-router';
///my imports
import firebaseApp from './firebase';
import Labodega from './components/Labodega';
import Login from './components/login';
import signUp from './components/signUp';

///firebase auth permite crear usuarios y proteje las rutas
firebaseApp.auth().onAuthStateChanged(user =>{
  if (user) {
    console.log('user has signed in or up');
    browserHistory.push('/store')
  }else{
    console.log('user signed out');
    browserHistory.replace('/')
  }
});


ReactDOM.render(
  <Router path="/" history={browserHistory}>
    <Route path="/" component={Login} />
    <Route path="/signUp" component={signUp} />
    <Route path="/store" component={Labodega} />
  </Router>,
  document.getElementById('root')
)
