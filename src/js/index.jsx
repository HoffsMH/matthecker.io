import 'whatwg-fetch';
import { BrowserRouter, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import React from 'react';
import Blog from './components/container/blog';
import HelloCard from './components/view/hello-card';

const wrapper = document.getElementById('main');

const App = () => (
  <div className="app-container">
    <Route exact path="/" component={Blog} />
    <Route path="/about" component={HelloCard} />
  </div>
);

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>), wrapper);
