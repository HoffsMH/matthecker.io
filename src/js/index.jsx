import 'whatwg-fetch';
import ReactDOM from 'react-dom';
import React from 'react';
import HelloCard from './components/view/hello-card';

const wrapper = document.getElementById('app-container');

ReactDOM.render((<HelloCard />), wrapper);
