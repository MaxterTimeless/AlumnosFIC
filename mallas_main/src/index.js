import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BarraSup from './BarraSup';
import './BarraSup.css';
import Footer from './Footer';
import './Footer.css';
import TagManager from 'react-gtm-module'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BarraSup />
    <App />
    <Footer />
  </React.StrictMode>
);

const tagManagerArgs = {
  gtmId: 'GTM-KV3KQ6J'
}

TagManager.initialize(tagManagerArgs)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

