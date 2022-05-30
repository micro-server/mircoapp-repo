import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { registerMicroApps, start,loadMicroApp } from 'qiankun';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/**
 * 微应用注册
 */
registerMicroApps([
  {
    name: 'sub-react', // app name registered
    // entry: '/sub-react/',
    entry: process.env.REACT_APP_aaa,
    container: '#subapp-viewport',
    activeRule: '/child-sub-react',
  },
]);

start();
/**
 * 微应用注册 END
 */

/**
 * 与路由不相关，手动注册
 */
//  loadMicroApp({
//   name: 'app',
//   entry: '//localhost:3002',
//   container: '#subRoot',
// });