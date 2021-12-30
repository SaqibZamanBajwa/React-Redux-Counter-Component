import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store'
import { Provider } from 'react-redux';

store.subscribe(() => console.log(store.getState()));  //To cheack the Redux store in our App | // Here subscribe() is basically change listener| store refers to the Redux store which we have just created | getState() is also a function used to get the Redux State.
                                                      
ReactDOM.render(
  <React.StrictMode> 
    <Provider store={store} >
      <App />
    </Provider> 
  </React.StrictMode>,
  document.getElementById("root") 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals