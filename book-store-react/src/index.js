import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './core/registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import bookStoreApp, { initialState } from './core/reducers'
import 'semantic-ui-css/semantic.min.css';

const store = createStore(
  bookStoreApp,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
