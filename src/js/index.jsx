import ReactDOM from 'react-dom';
import React from 'react';
import FormContainer from './components/container/FormContainer.jsx';

const wrapper = document.getElementById('main');

console.log('heres wrapper');
console.log(FormContainer);

ReactDOM.render(<FormContainer/>, wrapper);

