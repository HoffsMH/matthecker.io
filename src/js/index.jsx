import 'whatwg-fetch';
import { BrowserRouter, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import React from 'react';
import Blog from './components/container/blog';
import HelloCard from './components/view/hello-card';

const wrapper = document.getElementById('app-container');

const App = () => (
  <div className="full-height">
    <Route exact path="/about" component={HelloCard} />
    <Route path="/" component={Blog} />
  </div>
);

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>), wrapper);
