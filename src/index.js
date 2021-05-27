import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/Header';
import { Provider } from 'react-redux';
import { Store } from './store';


ReactDOM.render(
  <Provider store={Store}>
    <React.StrictMode>
      <Header />
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


