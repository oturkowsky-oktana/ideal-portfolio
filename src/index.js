import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './routes/App.jsx';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import initialState from './initialState'
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>  
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
