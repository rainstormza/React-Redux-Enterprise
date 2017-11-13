import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store, {history} from '@constants/store';
import 'isomorphic-fetch';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {persistStore} from 'redux-persist';
import {ConnectedRouter} from 'react-router-redux';
import App from '@containers/app/index';

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ConnectedRouter history={history}>
        <App/>
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('app')
);
