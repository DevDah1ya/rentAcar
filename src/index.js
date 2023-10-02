// index.js
import './css/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
<link href="https://fonts.googleapis.com/css2?family=Merriweather+Sans&display=swap" rel="stylesheet"></link>

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Routes>
        <Route path="/page/:pageNumber" element={<App />} />
        <Route path="/" element={<App />} />
      </Routes>
    </Provider>
  </Router>,
  document.getElementById('root')
);
