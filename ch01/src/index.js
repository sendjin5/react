import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Test4 from './Test4';
import Test5 from './Test5';
import Test6 from './Test6';
import Test7 from './Test7';
import Test8 from './Test8';
import Test9 from './Test9';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Test8 />
    <br></br>
    <Test4 />
    <br></br>
    <Test5 nam="콜라" age="50" addr="가산동"/>
    <br></br>
    <Test5 nam="환타" age="90" addr="금곡동"/>
    <br></br>
    <Test5 nam="밀키스" age="20" addr="경양동"/>
    <br></br>
    <Test6 nam="생각해보자" age="25" addr="민락동"/>
    <br></br>
    <Test7 nam="또또?" age="55" addr="검단동"/>
    <Test9 />

    

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
