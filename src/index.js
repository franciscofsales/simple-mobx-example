import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';

import App from './components/App';
import store from './reducers';
import './styles/index.css';

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
