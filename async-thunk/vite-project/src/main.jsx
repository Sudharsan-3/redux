// index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ updated import for React 18
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root')); // ✅ createRoot

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
