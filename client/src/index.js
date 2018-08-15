import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import 'semantic-ui-css/semantic.min.css';
import './css/semantic-ui-addon.css';
import WebFont from 'webfontloader';

const WebFontConfig = {
  google: {
    families: [
      'Titillium Web:300,400,700',
      'Open+Sans:300,400,600,700',
      'Roboto:300,400,500,700',
      'Montserrat:300,400,600,700',
      'Expletus+Sans:400,500,600,700',
      'Lato:400,400i,700,700i',
      'sans-serif'
    ]
  }
}

WebFont.load(WebFontConfig);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
// registerServiceWorker();
