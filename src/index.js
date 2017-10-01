import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'

import './index.css'
import App from './typing/app'
import typing_reducer from './typing/reducers'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(
  typing_reducer,
  composeWithDevTools(applyMiddleware(thunk)),
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
