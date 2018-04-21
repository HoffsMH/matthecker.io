import React from 'react';
import NavBar from '../view/navbar';
import BlogIndex from './blog-index';

const Blog = () => (
  <div className="is-flex">
    <NavBar />
    <BlogIndex />
  </div>
);

export default Blog;
