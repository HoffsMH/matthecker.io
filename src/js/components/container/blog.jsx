import NavBar from '../view/navbar';
import React from 'react';

window.fetch('https://api.github.com/users/HoffsMH/gists')
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    debugger;
  });



const Blog = () => (
  <div className="is-flex">
    <NavBar />
    <div>
      stuff
    </div>
  </div>
);

export default Blog;
