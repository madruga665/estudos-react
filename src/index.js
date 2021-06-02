import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/Header';
import { Provider } from 'react-redux';
import { store } from './redux/store';


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Header />
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


