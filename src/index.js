import React from 'react';
import ReactDOM from 'react-dom';
import './config/i18n';
import './index.scss';
import App from './screens';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
