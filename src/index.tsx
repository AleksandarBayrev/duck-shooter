import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { IStore } from './IStore';
import { Store } from './Store';
import { IKeyHandler } from './IKeyHandler';
import { KeyHandler } from './KeyHandler';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store: IStore = new Store();
const keyHandler: IKeyHandler = new KeyHandler(store);
root.render(
  <React.StrictMode>
    <App store={store} keyHandler={keyHandler} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
