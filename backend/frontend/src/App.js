import React from 'react';
import {Provider} from 'react-redux'
import './App.css';
import store from './redux/store'
import Layout from './components/Layout'
import setAuthToken from './utils/setAuthToken'
import { LOGIN_SUCCESS } from './redux/actions/types';

const token = localStorage.getItem('token')
if(token) {
  setAuthToken(token);
  store.dispatch({type:LOGIN_SUCCESS, payload:{token}});
}

function App() {
  return (
    <div className="App">
      <Provider store = {store}>
        <Layout/>
      </Provider>
    </div>
  );
}

export default App;
