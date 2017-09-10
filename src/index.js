import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import './index.css';
import App from './typing/app.js';
import typing_reducer from './typing/reducers'
import registerServiceWorker from './registerServiceWorker';


const store = createStore(typing_reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
