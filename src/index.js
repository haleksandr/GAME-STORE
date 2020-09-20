import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store';
import {Provider} from 'react-redux';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
          { console.log(store.getState()) }
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);