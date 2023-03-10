import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/APP';
import 'modern-normalize/modern-normalize.css';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);